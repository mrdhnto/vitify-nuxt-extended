import fetchPermissionsFromDb from "~/server/helpers/cachePermission"
import { responseSuccess, responseError } from '~/server/helpers/responseApi'
import db from '~/models'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		const nodeCache = useNitroApp().h3App.nodeCache
		const UserModel = db.mainUsersModel
		const JobTitle = db.mainJobTitleModel

		if (!body) {
			throw Object({message: "Request body is empty or undefined", code: 400})
		}

		const { email, password } = body;

		if (!email || !password) {
			throw Object({message: 'email and password are required', code: 400})
		}

		
		let user = await UserModel.findOne({
			where: {
				email,
				deleted_at: null,
				deleted_by: null
			},
			attributes: ['id', 'fullname', 'email', 'password'],
			include: { model: JobTitle, attributes: ['name']}
		})

		// For security reasons, do not specify if email or password is incorrect
		if (!user || await verifyPassword(user?.dataValues?.password, password) === false) {
			throw Object({message: 'Invalid email or password', code: 401})
		}

		const job_title = user.mainJobTitleModel
		user = user.dataValues
		user.job_title = job_title.name
    delete user.password
		delete user.mainJobTitleModel


		const permissions = await fetchPermissionsFromDb(user)
		const userData = {id: user.id, fullname: user.fullname, job_title: user.job_title, email: user.email, permissions};
		
		let payload = await generateJWT(event, userData)

		await setUserSession(event, {
			user: userData,
			loggedInAt: new Date(),
		},{
			maxAge: 60 * 60 * 2 // 2 hour
		})
		nodeCache.set(`auth-${user.id}`, permissions)

		user.jwt = payload
		return responseSuccess('login success', { data: user });
	} catch (err) {
		// console.log(error.message)
		return responseError(event, err.message, err.code)
	}
});


async function generateJWT(event, userData) {
	const config = useRuntimeConfig();
  const authorizedHosts = config.public.authorizedOrigins.map((origin) => {
    try {
      return new URL(origin).host; // Extract hostname from authorized origins
    } catch (err) {
      return null;
    }
  }).filter(Boolean);

  // Extract the origin or referer from headers
  let origin = getHeader(event, 'origin') || getHeader(event, 'referer');

  if (!origin) {
    origin = 'http://dummy_app.test'
  }

  let requestHost;
  try {
    requestHost = new URL(origin).host; // Extract hostname from the request origin
  } catch (err) {
    throw Object({
      code: 400,
      message: 'Invalid origin URL',
    });
  }

	let payload = userData
	payload.generate_token_at = dayjs().format('YYYY-MM-DD HH:mm:ss')

  if (!authorizedHosts.includes(requestHost)) delete payload.permissions	

	let accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
		expiresIn: '2h'
	})

	return accessToken
}