import { createContext, ReactNode, useEffect, useState } from "react";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
import useEvaluation from "../../../application/Evaluation/useEvaluation";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

export interface IEvaluacionContext {
  guardarEvaluacion: (e: Evaluacion) => void;
  Evaluationlist: Evaluacion[];
  searchEvaluationId: (idEvaluacion: string) => void;
  EvaluationId: Evaluacion | null;
  updateEvaluation: (idEvaluacion: string, evaluation: Evaluacion) => void;
  setEvaluationId: React.Dispatch<React.SetStateAction<Evaluacion | null>>;
}

const EvaluacionContext = createContext({});

export const EvaluacionoProvider = ({ children }: { children: ReactNode }) => {
  const [Evaluationlist, setEvaluationList] = useState<Evaluacion[]>([]);
  const [EvaluationId, setEvaluationId] = useState<Evaluacion | null >(
    {} as Evaluacion
  );
  const navigate = useNavigate();

  const { SaveEvalution, GetEvaluationAll, GetEvaluationId,UpdateEvaluation } = useEvaluation();
  const guardarEvaluacion = async (e: Evaluacion) => {
    await SaveEvalution(e);
    if (id) {
      setEvaluationId({} as Evaluacion);
    }
    allEvaluation();
    navigate(`/360/evaluation`);
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

  const updateEvaluation = async (idEvaluacion: string, evaluation: Evaluacion) => {
    const response = await UpdateEvaluation(idEvaluacion, evaluation);
    if (response) {
      toast.success("Evaluación actualizada");
      navigate(`/360/evaluation`);
    } else {
      toast.error("Error al actualizar la evaluación");
    }
  };

  useEffect(() => {
    if (id) {
      searchEvaluationId(id);
    }
    allEvaluation();
    setEvaluationId(null); 
  }, [id]);


 
  

  const storage: IEvaluacionContext = {
    setEvaluationId,
    guardarEvaluacion,
    Evaluationlist,
    searchEvaluationId,
    EvaluationId,
    updateEvaluation
  };

  return (
    <EvaluacionContext.Provider value={storage}>
      {children}
    </EvaluacionContext.Provider>
  );
};

export default EvaluacionContext;
