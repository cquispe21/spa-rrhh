import { useLocation } from "react-router-dom";
import FormularioEvaluacion from "./Components/EvaluacionFormTest";
import EvaluacionList from "./Components/EvaluationList";
import { EvaluacionoProvider } from "./Context/EvaluacionContext";

export default function EvaluacionIndex() {
  const location = useLocation();

  return (
    <EvaluacionoProvider>
      {location.pathname.startsWith("/360/evaluations/") &&
      !location.pathname.endsWith("/360/create") ? (
        <FormularioEvaluacion />
      ) : (
        <EvaluacionList />
      )}
    </EvaluacionoProvider>
  );
}
