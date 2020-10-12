let tasks = [];

const getAllByBoardId = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getAllByUserId = async userId => {
  return tasks.filter(task => task.userId === userId);
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

const deleteByIds = async ({ boardId, id = null }) => {
  // I'm tooo bored to find appropriate logical expression, sorry for that :(
  tasks = tasks
    .filter(task => task.boardId !== boardId)
    .filter(task => (!!id ? task.id !== id : false));

  return tasks;
};

module.exports = {
  getAllByUserId,
  getAllByBoardId,
  getByIds,
  create,
  update,
  deleteByIds
};
