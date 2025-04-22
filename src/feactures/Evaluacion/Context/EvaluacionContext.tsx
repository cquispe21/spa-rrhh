import { createContext, ReactNode, useState } from "react";
import { Pregunta, TipoPregunta } from "../../../domain/Evaluacion/evaluacion";
import { toast } from "sonner";

export interface IEvaluacionContext {
  preguntas: Pregunta[];
  nuevoTexto: string;
  nuevoTipo: TipoPregunta;
  nuevasOpciones: (number | string)[];
  setPreguntas: React.Dispatch<React.SetStateAction<Pregunta[]>>;
  setNuevoTexto: React.Dispatch<React.SetStateAction<string>>;
  setNuevoTipo: React.Dispatch<React.SetStateAction<TipoPregunta>>;
  setNuevasOpciones: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  agregarPregunta: () => void;
  eliminarPregunta: (index: number) => void;
  manejarCambioTexto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  manejarCambioTipo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  manejarCambioOpciones: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  agregarOpcion: () => void;
  guardarEvaluacion: () => void;

}

const EvaluacionContext = createContext({});

export const EvaluacionoProvider = ({ children }: { children: ReactNode }) => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [nuevoTexto, setNuevoTexto] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState<TipoPregunta>("parrafo");
  const [nuevasOpciones, setNuevasOpciones] = useState<(number | string)[]>([]);



  const agregarPregunta = () => {
    if (!nuevoTexto) {
      toast.warning("Por favor, ingresa el texto de la pregunta.");
      return;
    }
    const nuevaPregunta: Pregunta = {
      texto: nuevoTexto,
      tipo: nuevoTipo,
      opciones: nuevoTipo !== "parrafo" ? nuevasOpciones : undefined, 
    };
    setPreguntas([...preguntas, nuevaPregunta]);
    setNuevoTexto("");
    setNuevoTipo("parrafo");
    setNuevasOpciones([]);
  };


    const eliminarPregunta = (index: number) => {
      const nuevasPreguntas = preguntas.filter((_, i) => i !== index);
      setPreguntas(nuevasPreguntas);
    };
  
    const manejarCambioTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNuevoTexto(e.target.value);
    };
  
    const manejarCambioTipo = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setNuevoTipo(e.target.value as TipoPregunta);
    };
  
    const manejarCambioOpciones = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      const nuevasOpcionesActualizadas = [...nuevasOpciones];
      nuevasOpcionesActualizadas[index] = e.target.value;
      setNuevasOpciones(nuevasOpcionesActualizadas);
    };
  
    const agregarOpcion = () => {
      setNuevasOpciones([...nuevasOpciones, ""]); 
    };


      // Función para guardar la evaluación en el localStorage
  const guardarEvaluacion = () => {
    const preguntasmOdel = preguntas.map((pregunta) => {
      return {
        preguntas: {
          texto: pregunta.texto,
          tipo: pregunta.tipo,
          opciones: pregunta.opciones || [], // Asegurarse de que las opciones sean un array
        },
      };
    });
    // Convertir el estado preguntas en una cadena JSON y guardarlo en localStorage
    localStorage.setItem("evaluacion", JSON.stringify(preguntasmOdel));
    alert("Evaluación guardada correctamente.");
  };




  const storage: IEvaluacionContext = {
    preguntas,
    nuevoTexto,
    nuevoTipo,
    nuevasOpciones,
    setPreguntas,
    setNuevoTexto,
    setNuevoTipo,
    setNuevasOpciones,
    agregarPregunta,
    eliminarPregunta,
    manejarCambioTexto,
    manejarCambioTipo,
    manejarCambioOpciones,
    agregarOpcion,
    guardarEvaluacion,
  };

  return (
    <EvaluacionContext.Provider value={storage}>
      {children}
    </EvaluacionContext.Provider>
  );
};

export default EvaluacionContext;
