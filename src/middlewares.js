import routes from './routes';

export default (req, res, next) => {
  res.locals.siteName = 'MeTube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
