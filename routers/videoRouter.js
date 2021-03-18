import express from 'express';
import {
  getVideoUpload,
  postVideoUpload,
  videoDelete,
  videoDetail,
  videoEdit,
} from '../controllers/videoController';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, postVideoUpload);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
