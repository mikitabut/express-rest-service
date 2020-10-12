let boards = [];

const getAll = async () => {
  return boards;
};

const getById = async boardId => {
  return boards.find(({ id }) => id === boardId);
};

const create = async board => {
  boards.push(board);

  return board;
};

const update = async board => {
  const updatedBoard = await getById(board.id);

  if (!!updatedBoard) {
    updatedBoard.setTitle(board.title);
    updatedBoard.setColumns(board.columns);
  }

  return updatedBoard;
};

const deleteById = async boardId => {
  boards = boards.filter(({ id }) => boardId !== id);

  return boards;
};

module.exports = { getAll, getById, create, update, deleteById };
