const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const user = req.body;
  console.log(user);
  res.json({
    status: 'User received'
  })
});

module.exports = router;
