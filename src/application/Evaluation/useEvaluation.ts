import { toast } from "sonner";
import { Evaluacion } from "../../domain/Evaluacion/evaluacion";
import EvaluationServices from "../../infraestructure/EvaluationRepository/EvaluationServices";

export default function useEvaluation() {
  const { EvaluationSaved, EvaluationAll, EvaluationSearcId,EvaluationUpdate } =
    EvaluationServices();
  const SaveEvalution = async (evaluation: Evaluacion): Promise<boolean> => {
    try {
      await EvaluationSaved(evaluation);
      toast.success("Evaluación guardada");
      return true;
    } catch (error) {
      toast.error("Error al guardar la evaluación");
      throw error;
    }
  };

  const GetEvaluationAll = async (): Promise<Evaluacion[]> => {
    try {
      const response = await EvaluationAll();
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener las evaluaciones");
    }
  };

  const GetEvaluationId = async (
    idEvaluacion: string
  ): Promise<Evaluacion | null> => {
    try {
      return await EvaluationSearcId(idEvaluacion);
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener la evaluación por ID");
    }
  };

  const UpdateEvaluation = async (
    idEvaluacion: string,
    evaluation: Evaluacion
  ): Promise<boolean> => {
    try {
      return await EvaluationUpdate(idEvaluacion, evaluation);
    }
    catch (error) {
      console.log(error);
      throw new Error("Error al actualizar la evaluación");
    }
  };


  return { SaveEvalution, GetEvaluationAll, GetEvaluationId,UpdateEvaluation };
}
