import { Evaluacion } from "@/domain/Evaluacion/evaluacion";

export const mockEvaluaciones: Evaluacion[] = [
  {
    evaluacion: "Evaluación de Desempeño 2024",
    descripcion: "Evaluación anual de desempeño del empleado.",
    fechaCreacion: new Date("2024-12-15T10:00:00Z"),
    preguntas: [
      {
        texto: "¿Cómo calificarías tu rendimiento general?",
        tipo: "likert",
        opciones: []
      },
      {
        texto: "Describe tus principales logros este año.",
        tipo: "abierta",
        opciones: []
      },
      {
        texto: "Selecciona tus herramientas de trabajo favoritas.",
        tipo: "multiple",
        opciones: ["Slack", "Jira", "Notion", "Trello"]
      }
    ]
  },
  {
    evaluacion: "Evaluación de Capacitación",
    descripcion: "Feedback sobre el curso de liderazgo.",
    fechaCreacion: new Date("2024-11-01T09:00:00Z"),
    preguntas: [
      {
        texto: "¿Te resultó útil la capacitación?",
        tipo: "likert",
        opciones: []
      },
      {
        texto: "¿Qué mejorarías del curso?",
        tipo: "abierta",
        opciones: []
      },
      {
        texto: "¿Qué temas te interesaría profundizar?",
        tipo: "multiple",
        opciones: ["Comunicación", "Gestión de equipos", "Productividad", "Resolución de conflictos"]
      }
    ]
  },
  {
    evaluacion: "Evaluación de Onboarding",
    descripcion: "Retroalimentación sobre el proceso de bienvenida.",
    fechaCreacion: new Date("2025-01-05T14:00:00Z"),
    preguntas: [
      {
        texto: "¿Qué tan claro fue el proceso de inducción?",
        tipo: "likert",
        opciones: []
      },
      {
        texto: "¿Qué sugerencias tienes para mejorar el onboarding?",
        tipo: "abierta",
        opciones: []
      },
      {
        texto: "¿Qué canales de comunicación te parecieron útiles?",
        tipo: "multiple",
        opciones: ["Correo", "Slack", "Reuniones semanales"]
      }
    ]
  },
  {
    evaluacion: "Evaluación de Clima Laboral",
    descripcion: "Encuesta para conocer el ambiente en el trabajo.",
    fechaCreacion: new Date("2025-02-10T08:30:00Z"),
    preguntas: [
      {
        texto: "¿Te sientes valorado en tu equipo?",
        tipo: "likert",
        opciones: []
      },
      {
        texto: "¿Qué aspectos del ambiente laboral te gustaría cambiar?",
        tipo: "abierta",
        opciones: []
      },
      {
        texto: "Selecciona los beneficios que más valoras.",
        tipo: "multiple",
        opciones: ["Home Office", "Bonos", "Seguro médico", "Capacitación"]
      }
    ]
  },
  {
    evaluacion: "Evaluación Técnica",
    descripcion: "Prueba de conocimientos técnicos.",
    fechaCreacion: new Date("2025-03-12T11:45:00Z"),
    preguntas: [
      {
        texto: "¿Cómo evalúas tu nivel en tecnologías modernas?",
        tipo: "likert",
        opciones: []
      },
      {
        texto: "Describe un proyecto técnico desafiante en el que hayas trabajado.",
        tipo: "abierta",
        opciones: []
      },
      {
        texto: "¿Qué tecnologías has utilizado recientemente?",
        tipo: "multiple",
        opciones: ["React", "Node.js", "Docker", "Azure"]
      }
    ]
  }
];
