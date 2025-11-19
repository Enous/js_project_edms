//const pool = require("./pool");
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getAllPositions() {
  return await prisma.positions.findMany();
}

async function insertPosition(name) {
  return await prisma.positions.create({
    data: { name: name }
  });
}

async function deletePositionById(id) {
  return await prisma.positions.delete({
    where: { id: parseInt(id) }
  });
}

module.exports = {
  getAllPositions,
  insertPosition,
  deletePositionById
};
