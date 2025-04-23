import { IEvaluationServices } from "../../application/Evaluation/evaluation";
import { Evaluacion } from "../../domain/Evaluacion/evaluacion";
import EvaluationClient from "../../utils/configuration";

export default function EvaluationServices(): IEvaluationServices {
  const EvaluationSaved = async (evaluacion: Evaluacion): Promise<boolean> => {
    try {
      const res = await EvaluationClient.post("evaluations", evaluacion);
      return true;
    } catch (error) {
      console.error("Error al guardar la evaluación:", error);
      return false;
    }
  };

  const EvaluationAll = async (): Promise<Evaluacion[]> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const evaluations = localStorage.getItem("evaluacion");
      if (evaluations) {
        return JSON.parse(evaluations);
      }
      return [];
    } catch (error) {
      console.error("Error al obtener las evaluaciones:", error);
      return [];
    }
  };

  const EvaluationSearcId = async (
    idEvaluacion: string
  ): Promise<Evaluacion | null> => {
    try {
      // Simula delay (opcional)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const evaluations = localStorage.getItem("evaluacion");
      if (!evaluations) return null;

      const parsedEvaluations: Evaluacion[] = JSON.parse(evaluations);

      const evaluation = parsedEvaluations.find(
        (w) => w.idEvaluacion === idEvaluacion
      );

      return evaluation ?? null; // Devuelve null si no encuentra nada
    } catch (error) {
      console.error("Error al obtener la evaluación por ID:", error);
      return null;
    }
  };

  return { EvaluationSaved, EvaluationAll, EvaluationSearcId };
}
