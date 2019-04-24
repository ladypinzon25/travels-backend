const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const airplanes = [
    {
      id: "1",
      name: "Boeign"
    },
    {
      id: "2",
      name: "Airbus"
    },
    {
      id: "3",
      name: "Embraer"
    },
    {
      id: "4",
      name: "Emirates"
    }
  ];
  res.json(airplanes);
});

module.exports = router;
