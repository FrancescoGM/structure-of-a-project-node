import { Request, Response } from "express";

export default class Example {
  async index(req: Request, res: Response) {
    return res.status(200).json({ message: "Hello World" });
  }
}
