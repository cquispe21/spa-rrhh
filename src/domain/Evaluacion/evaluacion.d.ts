export interface Pregunta {
    texto: string;
    tipo: string;
    opciones?: string[];
  }
  
  export interface Evaluacion {
    evaluacion: string;
    preguntas: Pregunta[];
  }