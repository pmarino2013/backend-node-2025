// const express = require('express')
import express from "express";
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  //   res.send("Bienvenidos a Nodejs!");
  // res.json({
  //   message: "Hola mundo",
  //   Status: "ok",
  // });

  res.send(`<h1>Hola mundo</h1>
    <p>Esto es un párrafo desde el servidor</p>`);
});

app.post("/", (req, res) => {
  //   res.send("Bienvenidos a Nodejs!");
  res.json({
    message: "soy una petición POST",
    Status: "ok",
  });
});

app.put("/:id", (req, res) => {
  //   res.send("Bienvenidos a Nodejs!");
  res.json({
    message: "Soy una petición PUT",
    Status: "ok",
  });
});

app.delete("/:id", (req, res) => {
  //   res.send("Bienvenidos a Nodejs!");
  res.json({
    message: "soy una petición DELETE",
    Status: "ok",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
