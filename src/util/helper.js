// Reusable statusCode function. Where components won't load when receiving a status code of 400 or greater.

const assessStatusCode = (statusCode) => {
  return statusCode <= 400
}

export {assessStatusCode}