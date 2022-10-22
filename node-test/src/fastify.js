'use strict'

const fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  // logger: true
  http2: true,
  https: {
    allowHTTP1: true, // 向後支援HTTP1
    key: fs.readFileSync(path.resolve(__dirname, '../ssl', 'privkey.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, '../ssl', 'fullchain.pem'))
  }
})

// 此路由從HTTPS與HTTP2均可訪問
fastify.get('/', function (request, reply) {
  reply.code(200).send({ hello: 'world' })
})

fastify.listen({ port: 64108, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
