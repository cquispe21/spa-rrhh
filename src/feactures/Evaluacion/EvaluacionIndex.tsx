import Evaluacion360Form from "./Components/EvaluacionFormTest";
import { EvaluacionoProvider } from "./Context/EvaluacionContext";

export default function EvaluacionIndex() {
    return (
       <EvaluacionoProvider>
        <Evaluacion360Form />
       </EvaluacionoProvider>
    );
    }
