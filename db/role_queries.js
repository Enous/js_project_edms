const { Role } = require("./pool");

async function getAllRoles() {
  return await Role.findAll({
    raw : true
    });
}

async function getRoleById(id) {
  return await Role.findByPk(id);
}

async function editRoleById(id, name) {
  return await Role.update({ name: name }, {
    where: {
      id: id
    }
  });
}

async function insertRole(name) {
  return await Role.create({
    name: name
  });
}

async function deleteRoleById(id) {
  return await Role.destroy({
    where: {
      id: id
    }
  });
}

module.exports = {
  getAllRoles,
  insertRole,
  getRoleById,
  editRoleById,
  deleteRoleById
};
