import { Evaluacion } from "../../domain/Evaluacion/evaluacion";
import EvaluationServices from "../../infraestructure/EvaluationRepository/EvaluationServices";

export default function useEvaluation() {
  const { EvaluationSaved,EvaluationAll,EvaluationSearcId } = EvaluationServices();
  const SaveEvalution = async (evaluation: Evaluacion): Promise<boolean> =>  {
    try {
      return EvaluationSaved(evaluation);
    } catch (error) {
      console.log(error);   
        throw new Error("Error en la autenticación");
    }
  };

  const GetEvaluationAll = async (): Promise<Evaluacion[]> => {
    try {
      const response = await EvaluationAll();
      return response;
    }
    catch (error) {
      console.log(error);
      throw new Error("Error al obtener las evaluaciones");
    }
  };

  const GetEvaluationId = async (idEvaluacion:string): Promise<Evaluacion> => {
    try {
      return  await EvaluationSearcId(idEvaluacion);
    
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener la evaluación por ID");
    }
  }

  
  return {SaveEvalution,GetEvaluationAll,GetEvaluationId };
}
