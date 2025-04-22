export type TipoPregunta = 'parrafo' | 'likert' | 'multiple';

export interface Pregunta {
  texto: string;
  tipo: TipoPregunta;
  opciones?: (string | number)[];
}

export interface Evaluacion {
  evaluacion: string;
  preguntas: Pregunta[];
}


