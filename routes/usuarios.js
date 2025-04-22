import { Router } from "express";

const routerUser = Router();

routerUser.get("/", (req, res) => {
  const { limit, page } = req.query;
  res.status(200).json({
    message: "Bienvenidos a Nodejs!",
    page,
    limit,
  });
});

routerUser.post("/", (req, res) => {
  const { message } = req.body;
  res.status(201).json({
    message,
  });
});
routerUser.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(201).json({
    id,
  });
});

export default routerUser;
