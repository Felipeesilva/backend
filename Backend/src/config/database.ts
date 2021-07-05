import mongoose from "mongoose";



mongoose
  .connect(
    "mongodb+srv://prova:prova2@prova2bim.9kulv.mongodb.net/prova2bim?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco: ${error}`);
  });

export { mongoose };
