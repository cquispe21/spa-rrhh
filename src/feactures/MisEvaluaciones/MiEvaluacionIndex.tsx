import { useLocation } from "react-router-dom";
import MyFormularioEvaluacion from "./Components/MyEvaluacionFormTest";
import MyEvaluationList from "./Components/MyEvaluationList";
import { MiEvaluacionoProvider } from "./Context/MiEvaluacionContext";

export default function MisEvaluacionesIndex() {
  const location = useLocation();

  return (
    <MiEvaluacionoProvider>
      {location.pathname.startsWith("/360/myevaluations/") &&
      !location.pathname.endsWith("/360/create") ? (
        <MyFormularioEvaluacion />
      ) : (
        <MyEvaluationList />
      )}
    </MiEvaluacionoProvider>
  );
}
