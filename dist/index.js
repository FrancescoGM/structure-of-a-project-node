"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _server.default().server;
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
server.listen(PORT, HOST);