const errorRoutes = [
  {
    condition: err => err.isBoom,
    handler: (res, err) => res.status(err.output.statusCode)
      .send(err.output.payload)
  },
  {
    condition: err => err.isJoi,
    handler: (res, err) => res.status(400).send(err)
  }
];

const routeError = (req, res, next) => err => {
  const matchedAnyError = errorRoutes.some(route => {
    if (route.condition(err)) {
      route.handler(res, err);
      return true;
    }
  });
  return matchedAnyError ? null : next(err.message)
}

const handleAsyncErrors = fn => (req, res, next) => {
  const fnReturn = fn(req, res, next);
  return Promise
    .resolve(fnReturn)
    .catch(routeError(req, res, next));
}

module.exports = handleAsyncErrors;