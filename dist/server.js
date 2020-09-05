"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

class Server {
  constructor() {
    this.server = (0, _express.default)();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use((0, _cors.default)());
    this.server.use((0, _morgan.default)('dev'));
    this.server.use(_express.default.json({
      limit: '2mb'
    }));
    this.server.use(_express.default.urlencoded({
      extended: true
    }));
  }

  routes() {
    this.server.use(_routes.default);
  }

}

exports.default = Server;