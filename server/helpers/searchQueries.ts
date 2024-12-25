import { Op } from 'sequelize'
import dayjs from 'dayjs'

export async function queries(query) {
  try {
    let firstDate,
      endDate,
      searchQuery = {}
    if (query.page || query.limit || query.pagination) {
      delete query.page
      delete query.limit
      delete query.pagination
    }

    Object.entries(query).forEach((key) => {
      if (key[0].toLowerCase().includes('create')) {
        if (key[0].toLowerCase().includes('firstdate')) {
          firstDate = dayjs(key[1]).startOf('day').toISOString()     
          delete query[key[0]]
        } else if (key[0].toLowerCase().includes('enddate')) {
          endDate = dayjs(key[1]).endOf('day').toISOString()
          delete query[key[0]]
        }
        searchQuery['created_at'] = { [Op.between]: [firstDate, endDate] }
      } else if (key[0].toLowerCase().includes('update')) {
        if (key[0].toLowerCase().includes('firstdate')) {
          firstDate = dayjs(key[1]).startOf('day').toISOString()
          delete query[key[0]]
        } else if (key[0].toLowerCase().includes('enddate')) {
          endDate = dayjs(key[1]).endOf('day').toISOString()
          delete query[key[0]]
        }
        searchQuery['updated_at'] = { [Op.between]: [firstDate, endDate] }
      }
    })

    Object.entries(query).forEach((key) => {
      if (key[0] === 'status_code' ) {
        searchQuery[key[0]] = parseInt(key[1])
      } else {
        if (parseInt(key[1])) {
          searchQuery[key[0]] = parseInt(key[1])
        } else {
          searchQuery[key[0]] = { [Op.like]: `%${key[1]}%` }
        }
      }
    })

    if(!searchQuery.is_deleted) {
      searchQuery.deleted_at = null
    }

    return searchQuery
  } catch (err) {
    throw Object({ message: err.message, code: 500 })
  }
}
