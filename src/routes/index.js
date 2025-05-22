import express from "express";
import carros from "./carroRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API Node.js"));

  app.use(express.json(), carros);
};

export default routes;
