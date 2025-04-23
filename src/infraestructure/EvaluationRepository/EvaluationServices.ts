import { IEvaluationServices } from "../../application/Evaluation/evaluation";
import { Evaluacion } from "../../domain/Evaluacion/evaluacion";
import EvaluationClient from "../../utils/configuration";

export default function EvaluationServices(): IEvaluationServices {

  const EvaluationSaved = async (evaluacion: Evaluacion): Promise<boolean> => {
    try {
      await EvaluationClient.post("evaluations", evaluacion);
      return true;
    } catch (error) {
      console.error("Error al guardar la evaluación:", error);
      return false;
    }
  };

  const EvaluationAll = async (): Promise<Evaluacion[]> => {
    try {
      const res = await EvaluationClient.get("evaluations/getEvaluations").then(
        (res) => res.data.data
      );

      const modeloEvaluacion: Evaluacion[] = res.map(
        ({ _id, createdAt, ...rest }) => {
          return {
            ...rest,
            idEvaluacion: _id,
            fechaCreacion: createdAt,
          };
        }
      );

      return modeloEvaluacion;
    } catch (error) {
      console.error("Error al obtener las evaluaciones:", error);
      return [];
    }
  };

  const EvaluationSearcId = async (
    idEvaluacion: string
  ): Promise<Evaluacion | null> => {
    try {
      const res = await EvaluationClient.get(
        `evaluations/${idEvaluacion}`
      ).then((res) => res.data.data);

      const modeloEvaluacionId: Evaluacion = {
        ...res,
        idEvaluacion: res._id,
        fechaCreacion: res.createdAt,
      };
      delete modeloEvaluacionId._id;

      return modeloEvaluacionId;
    } catch (error) {
      console.error("Error al obtener la evaluación por ID:", error);
      return null;
    }
  };

  const EvaluationUpdate = async (
    idEvaluacion: string,
    evaluacion: Evaluacion
  ): Promise<boolean> => {
    try {
      await EvaluationClient.put(`evaluations/${idEvaluacion}`, evaluacion);
      return true;
    } catch (error) {
      console.error("Error al actualizar la evaluación:", error);
      return false;
    }
  }


  return { EvaluationSaved, EvaluationAll, EvaluationSearcId,EvaluationUpdate };
}
