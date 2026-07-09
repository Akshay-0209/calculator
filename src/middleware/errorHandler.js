// Central error handler
function errorHandler(err, req, res, next) {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
}

module.exports = { errorHandler };
