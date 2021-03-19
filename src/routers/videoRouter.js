import express from 'express';
import {
  getVideoUpload,
  postVideoUpload,
  videoDelete,
  videoDetail,
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, uploadVideo, postVideoUpload);
videoRouter.get(routes.videoDelete, videoDelete);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
