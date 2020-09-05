import Server from './server'

const server = new Server().server

const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST

server.listen(PORT, HOST)