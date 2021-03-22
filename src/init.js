import dotenv from 'dotenv';
import app from './app';
import './db';

import './models/Comment';
import './models/Video';

dotenv.config();
const PORT = process.env.PORT || 3000;

const handleListening = () => console.log(`✅ App listening at http://localhost:${PORT}`);

app.listen(PORT, handleListening);
