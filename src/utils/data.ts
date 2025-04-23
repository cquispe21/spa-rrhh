import { Evaluacion } from "@/domain/Evaluacion/evaluacion";

export const mockEvaluaciones: Evaluacion[] = [
  {
    title: "Evaluación de Desempeño 2024",
    description: "Evaluación anual de desempeño del empleado.",
    fechaCreacion: new Date("2024-12-15T10:00:00Z"),
    questions: [
      {
        text: "¿Cómo calificarías tu rendimiento general?",
        type: "likert",
        options: []
      },
      {
        text: "Describe tus principales logros este año.",
        type: "abierta",
        options: []
      },
      {
        text: "Selecciona tus herramientas de trabajo favoritas.",
        type: "multiple",
        options: ["Slack", "Jira", "Notion", "Trello"]
      }
    ]
  },
  {
    title: "Evaluación de Capacitación",
    description: "Feedback sobre el curso de liderazgo.",
    fechaCreacion: new Date("2024-11-01T09:00:00Z"),
    questions: [
      {
        text: "¿Te resultó útil la capacitación?",
        type: "likert",
        options: []
      },
      {
        text: "¿Qué mejorarías del curso?",
        type: "abierta",
        options: []
      },
      {
        text: "¿Qué temas te interesaría profundizar?",
        type: "multiple",
        options: ["Comunicación", "Gestión de equipos", "Productividad", "Resolución de conflictos"]
      }
    ]
  },
  {
    title: "Evaluación de Onboarding",
    description: "Retroalimentación sobre el proceso de bienvenida.",
    fechaCreacion: new Date("2025-01-05T14:00:00Z"),
    questions: [
      {
        text: "¿Qué tan claro fue el proceso de inducción?",
        type: "likert",
        options: []
      },
      {
        text: "¿Qué sugerencias tienes para mejorar el onboarding?",
        type: "abierta",
        options: []
      },
      {
        text: "¿Qué canales de comunicación te parecieron útiles?",
        type: "multiple",
        options: ["Correo", "Slack", "Reuniones semanales"]
      }
    ]
  },
  {
    title: "Evaluación de Clima Laboral",
    description: "Encuesta para conocer el ambiente en el trabajo.",
    fechaCreacion: new Date("2025-02-10T08:30:00Z"),
    questions: [
      {
        text: "¿Te sientes valorado en tu equipo?",
        type: "likert",
        options: []
      },
      {
        text: "¿Qué aspectos del ambiente laboral te gustaría cambiar?",
        type: "abierta",
        options: []
      },
      {
        text: "Selecciona los beneficios que más valoras.",
        type: "multiple",
        options: ["Home Office", "Bonos", "Seguro médico", "Capacitación"]
      }
    ]
  },
  {
    title: "Evaluación Técnica",
    description: "Prueba de conocimientos técnicos.",
    fechaCreacion: new Date("2025-03-12T11:45:00Z"),
    questions: [
      {
        text: "¿Cómo evalúas tu nivel en tecnologías modernas?",
        type: "likert",
        options: []
      },
      {
        text: "Describe un proyecto técnico desafiante en el que hayas trabajado.",
        type: "abierta",
        options: []
      },
      {
        text: "¿Qué tecnologías has utilizado recientemente?",
        type: "multiple",
        options: ["React", "Node.js", "Docker", "Azure"]
      }
    ]
  }
];
