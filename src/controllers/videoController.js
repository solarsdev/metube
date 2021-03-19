import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
  let videos = [];
  try {
    videos = await Video.find({});
  } catch (error) {
    console.error(error);
  }
  res.render('home', { pageTitle: 'Home', videos });
};

export const search = (req, res) => {
  const {
    query: { search_query: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Seach', searchingBy });
};

export const getVideoUpload = (req, res) =>
  res.render('videoUpload', { pageTitle: 'Video Upload' });

export const postVideoUpload = async (req, res) => {
  const {
    file: { path: fileUrl },
    body: { title, description },
  } = req;

  try {
    const videoUploaded = await Video.create({
      fileUrl,
      title,
      description,
    });
    res.redirect(routes.videoDetail(videoUploaded.id));
  } catch (error) {
    console.error(error);
  }
};

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' });

export const videoDelete = (req, res) =>
  res.render('videoDelete', { pageTitle: 'Video Delete' });
