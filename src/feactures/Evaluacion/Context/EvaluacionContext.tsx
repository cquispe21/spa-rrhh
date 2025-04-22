import { createContext, ReactNode } from "react";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
import useEvaluation from "../../../application/Evaluation/useEvaluation";
import { toast } from "sonner";

export interface IEvaluacionContext {
  guardarEvaluacion: (e: Evaluacion) => void;
}

const EvaluacionContext = createContext({});

export const EvaluacionoProvider = ({ children }: { children: ReactNode }) => {
  const { SaveEvalution } = useEvaluation();
  const guardarEvaluacion = async (e: Evaluacion) => {
    await SaveEvalution(e);
    toast.success("Evaluación guardada");
  };

  const storage: IEvaluacionContext = {
    guardarEvaluacion,
  };

  return (
    <EvaluacionContext.Provider value={storage}>
      {children}
    </EvaluacionContext.Provider>
  );
};

export default EvaluacionContext;
