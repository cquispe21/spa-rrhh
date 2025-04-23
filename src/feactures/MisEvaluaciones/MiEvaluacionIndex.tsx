
import MyEvaluationList from "./Components/MyEvaluationList";
import { MiEvaluacionoProvider } from "./Context/MiEvaluacionContext";

export default function MisEvaluacionesIndex() {

  return (
    <MiEvaluacionoProvider>
      <MyEvaluationList />
    </MiEvaluacionoProvider>
  );
}
