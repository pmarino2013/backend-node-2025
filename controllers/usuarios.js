import { request, response } from "express";

const getUsers = (req = request, res = response) => {
  const { limit, page } = req.query;
  res.status(200).json({
    message: "Bienvenidos a Nodejs!",
    page,
    limit,
  });
};

const postUser = (req = request, res = response) => {
  const { message } = req.body;
  res.status(201).json({
    message,
  });
};

const putUserId = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
  });
};

const deleteUserId = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
  });
};

export { getUsers, postUser, putUserId, deleteUserId };
