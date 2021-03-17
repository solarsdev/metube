import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send('Hi! im video root!'));
videoRouter.get(routes.videoUpload, (req, res) =>
  res.send('Hi! im video upload!'),
);
videoRouter.get(routes.videoDetail, (req, res) =>
  res.send('Hi! im video detail!'),
);
videoRouter.get(routes.videoEdit, (req, res) => res.send('Hi! im video edit!'));
videoRouter.get(routes.videoDelete, (req, res) =>
  res.send('Hi! im video delete!'),
);

export default videoRouter;
