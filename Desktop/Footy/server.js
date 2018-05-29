const express = require('express');
const path = require('path');
const app = express();

// Getting our STATS routes
const statistics = require('./server/routes/statistics');

// Making sure angular know that this distribution file is static
app.use(express.static(path.join(__dirname, 'dist')));

// Using middleware
app.use('/statistics', statistics);

// Catch all other routes requests and return it to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/footy/index.html'))
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
