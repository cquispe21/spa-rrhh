import { Evaluacion } from "@/domain/Evaluacion/evaluacion";
import { mockEvaluacionesmy } from "@/utils/datamyevaluation";
import { createContext, ReactNode, useEffect, useState } from "react";


export interface IMiEvaluacionContext {
  myEvaluationList: Evaluacion[];
  myEvaluation: Evaluacion;
}

const MiEvaluacionContext = createContext({});

export const MiEvaluacionoProvider = ({ children }: { children: ReactNode }) => {


  const [myEvaluationList,setMyEvaluationList] = useState<Evaluacion[]>([]);

  const [myEvaluation,setMyeVALIATON] = useState<Evaluacion>({} as Evaluacion);
 
  useEffect(() => {
    setMyEvaluationList(mockEvaluacionesmy)
    setMyeVALIATON(mockEvaluacionesmy[0])
  }
  , []);

  const storage: IMiEvaluacionContext = {
    myEvaluationList,
    myEvaluation
  };

  return (
    <MiEvaluacionContext.Provider value={storage}>
      {children}
    </MiEvaluacionContext.Provider>
  );
};

export default MiEvaluacionContext;
