import mongoose from "mongoose";

const computadorSchema = new mongoose.Schema({
  idPatrimonio: { type: mongoose.Schema.Types.ObjectId },
  fabricante: { type: String, required: true },
  modelo: { type: String },
  localizacao: {type: String},
  sistemaOperacional: { type: String }

}, { versionKey: false });

const computador = mongoose.model("computadores", computadorSchema);

export default carro;
