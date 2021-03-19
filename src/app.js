import '@babel/polyfill';
import fs from 'fs';
import path from 'path';
import express from 'express';
import helmet from 'helmet';
import moment from 'moment-timezone';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { localsMiddleware } from './middlewares';

import routes from './routes';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

morgan.token('date', (req, res, tz) => {
  return moment().tz(tz).format();
});
morgan.format(
  'logFormat',
  ':remote-addr [:date[Asia/Tokyo]] ":method :url" :status :res[content-length] - :response-time ms',
);

const app = express();
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' },
);

app.use(helmet({ contentSecurityPolicy: false })); // for security (such as xss sql injection etc)
app.use(morgan('logFormat', { stream: accessLogStream })); // for logging express connection
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser()); // get cookie info
app.use(localsMiddleware);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//app.use('./uploads', express.static('uploads'));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
