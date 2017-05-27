import express from 'express';
const app = express();

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
  console.log('Example app listening on port 3000!');
});
