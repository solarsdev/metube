import app from './app';
import './db';
import dotenv from 'dotenv';

import './models/Comment';
import './models/Video';

dotenv.config();
const port = process.env.WEB_PORT;

const handleListening = () =>
  console.log(`✅ App listening at http://localhost:${port}`);

app.listen(port, handleListening);
