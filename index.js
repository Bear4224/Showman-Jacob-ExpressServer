const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  console.log('Additional processing is done here');
  req.timestamp = new Date().toString();
  next();
})

app.get('/', (req, res) => {
    res.append('Content-Type', 'text/html');
    res.json('<html><head></head><body>'+
      '<h1>Hello World!</h1>'+
      '<h3>My server is working!!!</h3>'+
      '<h5>'+req.timestamp+'</h5></body></html>');

})

//------------------------------------------------------------------------
//stuff added at end of tutorial

app.get('/bbt/episodes', function (req, res) {
  res.json('BBT episode list');
})

//variable n, not restricted to numbers only unfortunately.
app.get('/bbt/episode/:n', function (req, res) {
  res.json('BBT episode '+req.params.n);
})

//------------------------------------------------------------------------

//
app.get('/bbt', function (req, res) {
  res.json('Big Bang Theory episode information');
})

//same as .../:n route, redundant
//app.get('/bbt/episode/:num', function (req, res) {
//  res.json('This is the /bbt/episode route and the episode number is '+req.params.num);
//})


//------------------------------------------------------------------------
//catch-all, that's why it's last. Uses a regular expression
app.get('*', function (req, res) {
  res.json('This part runs if no other paths catch it');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

