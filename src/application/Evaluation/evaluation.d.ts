import { Evaluacion } from "../../domain/Evaluacion/evaluacion";

export interface IEvaluationServices {
    EvaluationSaved: (evaluation: Evaluacion) => Promise<boolean>;
}