import { Evaluacion } from "@/domain/Evaluacion/evaluacion";

export const mockEvaluacionesmy: Evaluacion[] = [
  {
    idEvaluacion: "112312123121312",
    title: "Evaluación de Desempeño 2024",
    description: "Evaluación anual de desempeño del empleado.",
    fechaCreacion: "2024-12-15T10:00:00.000Z",
    questions: [
      {
        text: "¿Cómo calificarías tu rendimiento general?",
        type: "likert",
        options: [],
      },
      {
        text: "Describe tus principales logros este año.",
        type: "abierta",
        options: [],
      },
      {
        text: "Selecciona tus herramientas de trabajo favoritas.",
        type: "multiple",
        options: ["Slack", "Jira", "Notion", "Trello"],
      },
    ],
  },
];
