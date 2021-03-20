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

export const getVideoUpload = (req, res) => res.render('videoUpload', { pageTitle: 'Video Upload' });

export const postVideoUpload = async (req, res) => {
  const {
    file: { filename },
    body: { title, description },
  } = req;
  try {
    const videoUploaded = await Video.create({
      fileUrl: `/uploads/videos/${filename}`,
      title,
      description,
    });
    res.redirect(routes.videoDetail(videoUploaded.id));
  } catch (error) {
    console.error(error);
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  let video = {};
  try {
    video = await Video.findById(id);
  } catch (error) {}
  res.render('videoDetail', { pageTitle: 'Video Detail', video });
};

export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  let video = {};
  try {
    video = await Video.findById(id);
  } catch (error) {}
  res.render('videoEdit', { pageTitle: `Edit ${video.title}`, video });
};

export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
  } catch (error) {}
  res.redirect(routes.videoDetail(id));
};

export const videoDelete = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndDelete({ _id: id });
    // fs.unlinkSync(path.join(__dirname, 'uploads', 'videos', id));
  } catch (error) {}
  res.redirect(routes.home);
};
