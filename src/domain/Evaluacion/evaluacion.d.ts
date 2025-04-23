export interface Pregunta {
    texto: string;
    tipo: string;
    opciones?: string[];
  }
  
  export interface Evaluacion {
    idEvaluacion?: string;
    evaluacion: string;
    descripcion: string;
    preguntas: Pregunta[];
    fechaCreacion?: Date;
  }