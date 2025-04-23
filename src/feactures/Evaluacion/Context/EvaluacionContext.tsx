import { createContext, ReactNode, useEffect, useState } from "react";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
import useEvaluation from "../../../application/Evaluation/useEvaluation";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { set } from "react-hook-form";

export interface IEvaluacionContext {
  guardarEvaluacion: (e: Evaluacion) => void;
  Evaluationlist: Evaluacion[];
  searchEvaluationId: (idEvaluacion: string) => void;
  EvaluationId: Evaluacion;
}

const EvaluacionContext = createContext({});

export const EvaluacionoProvider = ({ children }: { children: ReactNode }) => {
  const [Evaluationlist, setEvaluationList] = useState<Evaluacion[]>([]);
  const [EvaluationId, setEvaluationId] = useState<Evaluacion>(
    {} as Evaluacion
  );
  const navigate = useNavigate();

  const { SaveEvalution, GetEvaluationAll, GetEvaluationId } = useEvaluation();
  const guardarEvaluacion = async (e: Evaluacion) => {
    await SaveEvalution(e);
    toast.success("Evaluación guardada");
    if (id) {
      setEvaluationId({} as Evaluacion);

      navigate(`/360/evaluation`);
    }
  };
  const { id } = useParams<{ id: string }>();
  const allEvaluation = async () => {
    const response = await GetEvaluationAll();
    return setEvaluationList(response);
  };
  const searchEvaluationId = async (idEvaluacion: string) => {
    const response = await GetEvaluationId(idEvaluacion);
    return setEvaluationId(response);
  };

  useEffect(() => {
    if (id) {
      searchEvaluationId(id);
    }
    allEvaluation();
  }, [id, ]);
  

  const storage: IEvaluacionContext = {
    guardarEvaluacion,
    Evaluationlist,
    searchEvaluationId,
    EvaluationId,
  };

  return (
    <EvaluacionContext.Provider value={storage}>
      {children}
    </EvaluacionContext.Provider>
  );
};

export default EvaluacionContext;
