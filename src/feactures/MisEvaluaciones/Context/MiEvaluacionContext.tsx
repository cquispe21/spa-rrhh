import { createContext, ReactNode } from "react";


export interface IMiEvaluacionContext {
  ejemplo: string;
}

const MiEvaluacionContext = createContext({});

export const MiEvaluacionoProvider = ({ children }: { children: ReactNode }) => {
  
  const ejemplo = localStorage.getItem("pathMiEvaluacion") || "/360/myevaluations";
 
  

  const storage: IMiEvaluacionContext = {
    ejemplo
  };

  return (
    <MiEvaluacionContext.Provider value={storage}>
      {children}
    </MiEvaluacionContext.Provider>
  );
};

export default MiEvaluacionContext;
