var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    res.json({id: 'bcc', url: response.data.message, width: 500, height: 476});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
