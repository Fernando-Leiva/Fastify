const fastify = require('fastify')({
    logger: true
})
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'hello world from fastify' })
})
fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })