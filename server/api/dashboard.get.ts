import { responseSuccess, responseError } from '~/server/helpers/responseApi'
import db from '~/models'

export default eventHandler(async (event) => {
  try {
		const DashboardModel = db.dashboardModel
    
    let dashboard = await DashboardModel.findAll()
    return responseSuccess('Success', { data: dashboard });
	} catch (err: any) {
		return responseError(event, err.message, err.code)
	}
})
