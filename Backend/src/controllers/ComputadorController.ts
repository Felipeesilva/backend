import { Request, Response } from "express";
import ComputadorSchema from "../models/ComputadorSchema";

class ComputadorController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await ComputadorSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {
    const novoComputador = await ComputadorSchema.create(request.body);
    response.status(201).json(novoComputador);
  }

//Deletar Computador
    async remover (request: Request, response: Response){
      try{
          const {id} = request.params;
          const remover = await ComputadorSchema.deleteOne({ _id: id});
          response.status(200).json({
              objeto: remover,
              msg: "item deletado com sucesso",
              erro: false
          });
      }catch ( error ){
          response.status(401).json({
              objeto: error,
              msg: "Erro ao excluir solicitação!",
              erro: true
          })   
      };
  }

}



export { ComputadorController };
