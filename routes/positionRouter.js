const { Router } = require("express");
const { positionGet, positionPost, deletePosition } = require('../controllers/positionController');

const positionRouter = Router();

positionRouter.get("/", positionGet);
positionRouter.post("/new", positionPost);
positionRouter.get("/:id/delete", deletePosition);

module.exports = positionRouter;