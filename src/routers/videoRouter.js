import express from 'express';
import {
  getVideoUpload,
  postVideoUpload,
  getVideoEdit,
  postVideoEdit,
  videoDelete,
  videoDetail,
} from '../controllers/videoController';
import routes from '../routes';
import videoUpload from '../videoUpload';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, videoUpload, postVideoUpload);
videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);
videoRouter.get(routes.videoDelete(), videoDelete);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
