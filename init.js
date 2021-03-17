import app from './app';

const port = 3000;

const handleListening = () =>
  console.log(`✅ App listening at http://localhost:${port}`);

app.listen(port, handleListening);
