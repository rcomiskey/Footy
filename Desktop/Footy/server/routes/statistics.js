const express = require('express')
const router = express.Router();

const axios = require('axios');
const StatisticsAPI = '';
//GET STATS

router.get('/', (req, res) => {
  res.send('STATS WORKS');
});

module.exports = router;
