const loggerMiddleware = (req, res, next) => {
  module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  }
}
export default loggerMiddleware;
