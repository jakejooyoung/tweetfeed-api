import express from 'express';
import router from './routes';

const app = express();

const 	PORT = process.env.PORT || 3000,
		HOSTNAME = "0.0.0.0";

app.get('/', (req, res) => {
  res.send('This is the tweetfeed api server.');
});

router(app);

const server = app.listen(PORT, HOSTNAME, function () {
  console.log('App listening on ' + HOSTNAME + ':' + PORT);
});

export default server;
