import { IEvaluationServices } from "../../application/Evaluation/evaluation";
import { Evaluacion } from "../../domain/Evaluacion/evaluacion";

export default function EvaluationServices(): IEvaluationServices {
  const EvaluationSaved = async (evaluacion: Evaluacion): Promise<boolean> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("evaluacion", JSON.stringify(evaluacion));
      return true;
    } catch (error) {
      console.error("Error al guardar la evaluación:", error);
      return false;
    }
  };
  return { EvaluationSaved };
}
