const { Router } = require("express");
const { positionGet } = require('../controllers/positionController');

const indexRouter = Router();

indexRouter.get("/", (req, res) => { 
  console.log("yay");
  res.end(); 
});

module.exports = indexRouter;