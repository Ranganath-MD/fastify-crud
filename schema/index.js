const {
  getBooks,
  getBooksById,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers");


const getBookOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            year: { type: "number" },
          },
        },
      },
    },
  },
  handler: getBooks
};

const addBookOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "year"],
      properties: {
        name: { type: "string" },
        year: { type: "number" },
      },
    },
    201: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          year: { type: "number" },
        },
      },
    },
  },
  handler: addBook
};

const updateBookOpts = {
  schema: {
    200: {
      type: "object",
      items: {
        type: "object",
        properties: {
          marvel: { type: "arr" },
          changed: { type: "object" },
        },
      },
    },
  },
  handler: updateBook
};

const deleteBookOpts = {
  schema: {
    200: {
      type: "object",
      items: {
        type: "object",
        properties: {
          marvel: { type: "arr" },
          changed: { type: "object" },
        },
      },
    },
  },
  handler: deleteBook
};

module.exports = {
  getBookOpts,
  addBookOpts,
  updateBookOpts,
  deleteBookOpts,
};
