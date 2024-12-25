import jwt from 'jsonwebtoken';
import { responseError } from '~/server/helpers/responseApi'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const url = event.node.req.url;

  if(!url.includes('/api/')) return;

  // Skip the middleware for the login route
  if (config.public.nonAuthURL.includes(url)) {
    return; // No authentication needed for login
  }

  try {
    // Retrieve the token from the headers
    const headers = getHeaders(event);
    let authHeader = headers.authorization || headers.Authorization;
    authHeader = (!authHeader || !authHeader.startsWith('Bearer ')) ? undefined : authHeader.split(' ')[1];

    const token = getCookie(event, 'nuxt-token') ? getCookie(event, 'nuxt-token') : authHeader;

    if (!token) {
      throw Object({
        code: 400,
        message: 'Unauthenticate',
      });
    }

    // Verify the token
    const secretKey = process.env.SECRET_KEY || '';
    const decoded = jwt.verify(token, secretKey);
  
    // Attach the decoded user information to the event context
    event.context.loggedInUser = decoded;

  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return responseError(event, 'JWT Expired', err.code)
    }
    return responseError(event, err.message, err.code)
  }
});
