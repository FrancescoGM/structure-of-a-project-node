"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Example {
  async index(req, res) {
    return res.status(200).json({
      "message": "Helaaalo World"
    });
  }

}

exports.default = Example;