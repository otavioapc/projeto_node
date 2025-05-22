import express from "express";
import computador from "./computadorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API Node.js"));

  app.use(express.json(), computador);
};

export default routes;
