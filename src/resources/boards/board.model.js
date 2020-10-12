const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'Title',
    columns = [{ id: uuid(), title: 'Column title', order: 1 }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.setColumns(columns);
  }

  setTitle(title = 'Title') {
    this.title = title;
  }

  setColumns(columns = []) {
    this.columns = columns.map(column => ({ id: uuid(), ...column }));
  }

  static toResponse(board) {
    return board;
  }
}

module.exports = Board;
