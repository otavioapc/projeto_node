import express from "express";
import ComputadorController from "../controllers/computadorController.js";

const routes = express.Router();

routes.get("/computadores", ComputadorController.listarComputadores);
routes.get("/computadores/:id", ComputadorController.listarComputadoresPorId);
routes.post("/computadores", ComputadorController.cadastrarComputador);
routes.put("/computadores/:id", ComputadorController.atualizarComputador);
routes.delete("/computadores/:id", ComputadorController.excluirComputador);

export default routes;
