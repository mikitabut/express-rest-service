const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllByBoardId = boardId => tasksRepo.getAllByBoardId(boardId);

const getByIds = (boardId, taskId) => tasksRepo.getByIds(boardId, taskId);

const create = (boardId, fields) => {
  const task = new Task({ ...fields, boardId });

  return tasksRepo.create(task);
};

const update = (boardId, id, boardFields) => {
  const task = new Task({ ...boardFields, id, boardId });

  return tasksRepo.update(task);
};

const deleteByIds = (boardId, id) => {
  return tasksRepo.deleteByIds(boardId, id);
};

module.exports = { getAllByBoardId, getByIds, create, update, deleteByIds };
