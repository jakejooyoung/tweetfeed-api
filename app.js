import express from 'express';
import router from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is the zdk tweetfeed api');
});

router(app);

const server = app.listen(port, () => {
  console.log('App listening on port %s', port);
});

export default server;
