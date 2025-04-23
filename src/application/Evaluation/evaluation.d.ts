import { Evaluacion } from "../../domain/Evaluacion/evaluacion";

export interface IEvaluationServices {
    EvaluationSaved: (evaluation: Evaluacion) => Promise<boolean>;
    EvaluationAll: () => Promise<Evaluacion[]>;
    EvaluationSearcId: (idEvaluacion:string) => Promise<Evaluacion | null>;
}