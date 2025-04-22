import { Evaluacion } from "../../domain/Evaluacion/evaluacion";
import EvaluationServices from "../../infraestructure/EvaluationRepository/EvaluationServices";

export default function useEvaluation() {
  const { EvaluationSaved } = EvaluationServices();
  const SaveEvalution = async (evaluation: Evaluacion): Promise<boolean> =>  {
    try {
      return EvaluationSaved(evaluation);
    } catch (error) {
      console.log(error);   
        throw new Error("Error en la autenticación");
    }
  };

  
  return {SaveEvalution };
}
