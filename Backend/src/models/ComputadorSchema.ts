import { model, Schema } from "mongoose";

const computadorSchema = new Schema(
  {
    idComputador: {
      type: Number,
      required: [true, 'O campo ID é obrigatório!'],
    },
    dono: {
      type: String,
      required: [true, "O campo DONO é obrigatório!"],
    },
    placamae: {
      type: String,
      required: [true, "O campo PLACAMAE é obrigatório!"],
    },
    processador: {
      type: String,
      required: [true, "O campo PROCESSADOR é obrigatório!"],
    },
    memoria: {
      type: Number,
      required: [true, "O campo MEMORIA é obrigatório!"],
    },
    armazenamento: {
      type: String,
      required: [true, "O campo ARMAZENAMENTO é obrigatório!"],
    },
    fonte: {
      type: String,
      required: [true, "O campo FONTE é obrigatório!"],
    }
  },
  {
    timestamps: true,
  }
);

export default model("nomeColecao", computadorSchema);
