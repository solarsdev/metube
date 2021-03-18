import { videos } from '../db';
import routes from '../routes';

export const home = (req, res) =>
  res.render('home', { pageTitle: 'Home', videos });

export const search = (req, res) => {
  const {
    query: { search_query: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Seach', searchingBy });
};

export const getVideoUpload = (req, res) =>
  res.render('videoUpload', { pageTitle: 'Video Upload' });

export const postVideoUpload = (req, res) => {
  const {
    body: { videoFile, title, description },
  } = req;
  // Upload video
  res.redirect(routes.videoDetail(12392));
};

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' });
export const videoEdit = (req, res) =>
  res.render('videoEdit', { pageTitle: 'Video Edit' });
export const videoDelete = (req, res) =>
  res.render('videoDelete', { pageTitle: 'Video Delete' });
