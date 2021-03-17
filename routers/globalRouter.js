import express from 'express';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send('Hi! im root!'));
globalRouter.get(routes.join, (req, res) => res.send('Hi! im join!'));
globalRouter.get(routes.login, (req, res) => res.send('Hi! im login!'));
globalRouter.get(routes.logout, (req, res) => res.send('Hi! im logout!'));
globalRouter.get(routes.search, (req, res) => res.send('Hi! im search!'));

export default globalRouter;
