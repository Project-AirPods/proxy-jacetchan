require ('newrelic');
const express = require('express');
const path = require('path');
// var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());

// app.options('*', cors())

app.use('/listings/:listingId', express.static(path.join(__dirname, 'public')));

// // booking module
app.get('/listings/:listingId/booking*', (req, res) => {
  // console.log(req.url);
  res.redirect(`http://ec2-54-183-201-8.us-west-1.compute.amazonaws.com${req.url}`);
});

// description module
app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://ec2-52-23-163-170.compute-1.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://ec2-52-23-163-170.compute-1.amazonaws.com${req.url}`);
});

// // reviews module
// app.get('/listings/:listingId/reviews', (req, res) => {
//   res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
// });

// app.get('/listings/:listingId/overviews', (req, res) => {
//   res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
// });

// image module
app.get('/listings/:listingId/pictures', (req, res) => {
  // console.log(req.url);
  res.redirect(`http://ec2-54-91-186-95.compute-1.amazonaws.com${req.url}`);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
