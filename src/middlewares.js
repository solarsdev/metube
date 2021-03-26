import routes from './routes';

export default (req, res, next) => {
  res.locals.siteName = 'MeTube';
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthenticated: false,
  };
  next();
};
