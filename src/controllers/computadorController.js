import computador from "../models/Computador.js";

class ComputadorController {

  static async listarComputadores (req, res) {
    try {
      const listaComputadores = await computador.find({});
      res.status(200).json(listaComputadores);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarComputadoresPorId (req, res) {
    try {
      const id = req.params.id;
      const computadorEncontrado = await computador.findById(id);
      res.status(200).json(computadorEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do carro` });
    }
  };

  static async cadastrarComputador (req, res) {
    try {
      const novoComputador = await computador.create(req.body);
      res.status(201).json({ message: "criado com sucesso", computador: novoComputador });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar computador` });
    }
  }

  static async atualizarComputador (req, res) {
    try {
      const id = req.params.id;
      await computador.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "computador atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirComputador (req, res) {
    try {
      const id = req.params.id;
      await computador.findByIdAndDelete(id);
      res.status(200).json({ message: "computador excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default ComputadorController;
