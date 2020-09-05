"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.get('/', (req, res) => {
    return res.send('Olá Mundo');
});
server.listen(3000, '0.0.0.0');
