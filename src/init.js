import app from './app';
import './db';
import dotenv from 'dotenv';

import './models/Comment';
import './models/Video';

dotenv.config();
const PORT = process.env.PORT || PORT;

const handleListening = () =>
  console.log(`✅ App listening at http://localhost:${PORT}`);

app.listen(PORT, handleListening);
