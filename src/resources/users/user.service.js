const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = ({ name, login, password }) => {
  const user = new User({ name, login, password });

  return usersRepo.create(user);
};

const update = (id, userFields) => {
  const user = new User({ id, ...userFields });

  return usersRepo.update(user);
};

const deleteById = id => {
  return usersRepo.deleteById(id);
};

module.exports = { getAll, getById, create, update, deleteById };
