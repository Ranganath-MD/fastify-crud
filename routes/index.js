const {
  getBookOpts,
  addBookOpts,
  updateBookOpts,
  deleteBookOpts,
} = require("../schema");

const basicRoute = (fastify, options, done) => {
  fastify.get("/", () => "Welcome to Fastify");
  fastify.get("/books", getBookOpts);
  fastify.post("/books", addBookOpts);
  fastify.put("/books/:id", updateBookOpts);
  fastify.delete("/books/:id", deleteBookOpts);

  done();
};

module.exports = basicRoute;
