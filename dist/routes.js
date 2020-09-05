"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _exampleController = _interopRequireDefault(require("./controllers/exampleController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
const Example = new _exampleController.default();
routes.get('/', Example.index);
var _default = routes;
exports.default = _default;