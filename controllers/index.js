const { v4 } = require("uuid");

const marvel = [
  { id: "1", name: "Avengers", year: 2012 },
  { id: "2", name: "Thor: Ragnarok", year: 2017 },
  { id: "3", name: "Iron Man", year: 2010 },
];

const getBooks = (_, reply) => {
  reply.send(marvel);
};
const addBook = (req, reply) => {
  const { name, year } = req.body;
  marvel.push({ id: v4(), name, year });

  reply.send(marvel);
};
const getBooksById = () => {};
const updateBook = (req, reply) => {
  const { name } = req.body;
  const { id } = req.params;
  const movie = marvel.find((item) => item.id === id);
  movie.name = name;

  reply.send({
    marvel,
    changed: movie,
  });
};
const deleteBook = (req, reply) => {
  const { id } = req.params;
  const movie = marvel.filter((item) => item.id !== id);
  reply.send({
    movie,
    deleted: marvel.filter((item) => item.id === id),
  });
};

module.exports = {
  getBooks,
  getBooksById,
  addBook,
  updateBook,
  deleteBook,
};
