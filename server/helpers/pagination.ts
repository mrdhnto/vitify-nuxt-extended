export async function pagination (page, limit, data) {
  try {
    let meta = {
      totalData: data.count,
      data: data.rows.length,
      limit: limit,
      page: page,
      totalPages: Math.ceil(data.count / limit),
    };
    return meta;
  } catch (err) {
    throw Error(err.message);
  }
}
