const fastify = require("fastify");

fastify({ logger: true })
const app = fastify();

app.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: 'Fastify Swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
  }
})
app.register(require("./routes"))

const start = async() => {
  try {
    await app.listen(5000, () => {
      console.log("server is running at 5000")
    })
  } catch (error) {
    console.error("something went wrong")
  }
}

start()