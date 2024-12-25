import { responseSuccess, responseError } from '~/server/helpers/responseApi'
import db from '~/models'

export default eventHandler(async (event) => {
  try {
		const PeopleModel = db.peopleModel
    
    let people = await PeopleModel.findAll()
    return responseSuccess('Success', { data: people });
	} catch (err: any) {
		return responseError(event, err.message, err.code)
	}
})
