const db = require("../db/queries");

async function getPositions(req, res) {
  const positions = await db.getAllPositions();
  return positions;
}

async function positionGet(req, res) {
  const positions = await db.getAllPositions(); 
  res.render("index", { items: positions, error: null });
}

async function positionPost(req, res) {
  const { item } = req.body;
  
  try {
    await db.insertPosition(item);
    res.redirect("/positions");
  } catch (error) {
    if (error.code === 'P2002') {
      const positions = await db.getAllPositions();
      res.render("index", { 
        items: positions,
        error: "Данная должность уже существует в базе данных" 
      });
    }
  }
}

async function editPosition(req, res) {
  res.redirect("/positions");
}

async function deletePosition(req, res) {
  await db.deletePositionById(req.params.id);
  res.redirect("/positions");
}

module.exports = {
  getPositions,
  positionGet,
  positionPost,
  deletePosition
};