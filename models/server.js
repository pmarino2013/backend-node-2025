import express from "express";
import routerUser from "../routes/usuarios.js";
import cors from "cors";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuarioPath = "/api/usuarios";
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  routes() {
    // this.app.get("/", (req, res) => {
    //   res.send("Bienvenidos a Nodejs!");
    // });
    this.app.use(this.usuarioPath, routerUser);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server online in port: ${this.port}`)
    );
  }
}

export default Server;
