export async function responseSuccess(message, data, statusCode = null) {
  const response = {
    message,
    code: data?.code || 200,
    meta: data?.meta || null,
    data: data?.data || null,
  };
  if (statusCode !== null) response.statusCode = statusCode
  return response
};

export async function responseError (event, message, code = 400, meta = null) {
  const response = {
    message,
    code,
  };
  if (meta !== null) response.meta = meta
  setResponseStatus(event, code)
  return response
};

