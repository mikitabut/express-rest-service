const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAllByUserId = async userId => tasksRepo.getAllByUserId(userId);

const getAllByBoardId = async boardId => tasksRepo.getAllByBoardId(boardId);

const getByIds = async (boardId, taskId) => tasksRepo.getByIds(boardId, taskId);

const create = async (boardId, fields) => {
  const task = new Task({ ...fields, boardId });

  return tasksRepo.create(task);
};

const update = async (boardId, id, boardFields) => {
  const task = new Task({ ...boardFields, id, boardId });

  return tasksRepo.update(task);
};

const deleteByIds = async (boardId, id) => {
  return tasksRepo.deleteByIds({ boardId, id });
};

const clearUserId = async userId => {
  const tasks = await getAllByUserId(userId);

  return tasks.forEach(task => {
    task.userId = null;
  });
};

module.exports = {
  getAllByBoardId,
  getByIds,
  create,
  update,
  deleteByIds,
  getAllByUserId,
  clearUserId
};
