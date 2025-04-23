export interface Pregunta {
  text: string;
  type: string;
  options?: string[];
  }
  
  export interface Evaluacion {
    idEvaluacion?: string;
    title: string;
    description: string;
    questions: Pregunta[];
    fechaCreacion?: Date;
  }