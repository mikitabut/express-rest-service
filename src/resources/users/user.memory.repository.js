let users = [];

const getAll = async () => {
  return users;
};

const getById = async userId => {
  return users.find(({ id }) => id === userId);
};

const create = async user => {
  users.push(user);

  return user;
};

const update = async user => {
  const updatedUser = await getById(user.id);
  updatedUser.setName(user.name);
  updatedUser.setLogin(user.login);
  updatedUser.setPassword(user.password);

  return updatedUser;
};

const deleteById = async userId => {
  users = users.filter(({ id }) => userId !== id);

  return users;
};

module.exports = { getAll, getById, create, update, deleteById };
