import express from 'express';
import mongoose from 'mongoose';
import serverConfig from './serverConfig';

const app = express();
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  //dummyData();
});

app.use('/public', express.static('dist/public'));
app.get('/', function (req, res) {
  res.send(`<html>
  <head>
    <title>Express HTML</title>
  </head>
  <body>
    <div id="rootApp" />
    <script src="public/app.bundle.js" type="text/javascript"> </script>
  </body>
</html>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'); // eslint-disable-line no-console
});
