const db = require("../db/role_queries");
const { ERROR_TYPES, ERROR_MESSAGES } = require('../js/constants');

async function getRoles(req, res) {
  const roles = await db.getAllRoles();
  return roles;
}

async function roleGet(req, res) {
  const roles = await db.getAllRoles(); 

  res.render("roles", { items: roles });
}

async function roleFormGet(req, res) {
  const { error } = req.query;

  const errorMessage = ERROR_MESSAGES[error] || null;

  res.render("role_form", { name: null, error: errorMessage });
}

async function rolePost(req, res) {
  const { name } = req.body;
  
  try {
    await db.insertRole(name);
    res.redirect("/roles");
  } catch (error) {
    let errorParam = null;
    
    if (error.name === 'SequelizeUniqueConstraintError') {
      errorParam = ERROR_TYPES.VALUE_EXISTS;
    }
    else {
      errorParam = ERROR_TYPES.INVALID_FORMAT;
    }

    res.redirect(`/roles/form?error=${errorParam}`);
  }
}

async function editRoleFormGet(req, res) {
  const id = req.params.id;
  const role = await db.getRoleById(id); 
  const name = role.name;
  
  const { error } = req.query;
  const errorMessage = ERROR_MESSAGES[error] || null;

  res.render("role_form", { name: name, error: errorMessage });
}

async function editRoleFormPost(req, res) {
  const id = req.params.id;
  const { name } = req.body;
  const role = await db.getRoleById(id);

  if (role.name === name) {
    res.redirect("/roles");
    return;
  }
  
  try {
    await db.editRoleById(id, name);
    res.redirect("/roles");
  } catch (error) {
    let errorParam = null;

    if (error.name === 'SequelizeUniqueConstraintError') {
      errorParam = ERROR_TYPES.VALUE_EXISTS;
    }
    else {
      errorParam = ERROR_TYPES.INVALID_FORMAT;
    }

    res.redirect(`/roles/form/${id}?error=${errorParam}`);
  }
}

async function deleteRole(req, res) {
  await db.deleteRoleById(req.params.id);
  res.redirect("/roles");
}

module.exports = {
  getRoles,
  roleGet,
  roleFormGet,
  rolePost,
  editRoleFormGet,
  editRoleFormPost,
  deleteRole
};