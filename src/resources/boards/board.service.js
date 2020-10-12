const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const create = ({ title, columns }) => {
  const board = new Board({ title, columns });

  return boardsRepo.create(board);
};

const update = (id, boardFields) => {
  const board = new Board({ id, ...boardFields });

  return boardsRepo.update(board);
};

const deleteById = async id => {
  await tasksService.deleteByIds(id);

  return boardsRepo.deleteById(id);
};

module.exports = { getAll, getById, create, update, deleteById };
