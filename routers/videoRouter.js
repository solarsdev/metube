import express from 'express';
import {
  videoDelete,
  videoDetail,
  videoEdit,
  videoUpload,
} from '../controllers/videoController';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;
