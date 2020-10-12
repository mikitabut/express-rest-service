const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  let status = 200;

  if (!board) {
    status = 404;
  }

  res.status(status).json(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);

  res.status(200).json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);

  res.status(200).json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const boards = await boardsService.deleteById(req.params.id);

  res.status(200).json(boards.map(Board.toResponse));
});

module.exports = router;
