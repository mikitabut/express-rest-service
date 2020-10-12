let tasks = [];

const getAllByBoardId = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getByIds = async (boardId, taskId) => {
  return tasks.find(task => task.id === taskId && task.boardId === boardId);
};

const create = async task => {
  tasks.push(task);

  return task;
};

const update = async task => {
  const updatedTask = await getByIds(task.boardId, task.id);

  if (!!updatedTask) {
    updatedTask.setTitle(task.title);
    updatedTask.setOrder(task.order);
    updatedTask.setDescription(task.description);
  }

  return updatedTask;
};

const deleteByIds = async (boardId, id) => {
  tasks = tasks.filter(task => task.id !== id);

  return tasks;
};

module.exports = {
  getAllByBoardId,
  getByIds,
  create,
  update,
  deleteByIds
};
