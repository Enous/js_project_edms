const { Router } = require("express");
const roleController = require('../controllers/roleController');

const roleRouter = Router();

roleRouter.get("/", roleController.roleGet);
roleRouter.get("/form", roleController.roleFormGet);
roleRouter.post("/form/create", roleController.rolePost);
roleRouter.get("/form/:id", roleController.editRoleFormGet);
roleRouter.post("/form/:id/edit", roleController.editRoleFormPost);
roleRouter.get("/:id/delete", roleController.deleteRole);

module.exports = roleRouter;