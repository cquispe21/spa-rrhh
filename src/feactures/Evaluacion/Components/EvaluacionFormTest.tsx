import React from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  FormProvider,
} from "react-hook-form";
import { toast } from "sonner";
import Button from "../../../shared/Components/Button";
import DeleteIcon from "../../../icons/DeleteIcon";
import { OpcionesMultiples } from "./OpcionesMultiples";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import InputSelectContext from "../../../shared/Components/InputSelectContext";
import SavedIcon from "../../../icons/SavedIcon";

interface Pregunta {
  texto: string;
  tipo: string;
  opciones?: string[];
}

interface Evaluacion {
  evaluacion: string;
  preguntas: Pregunta[];
}

const FormularioEvaluacion: React.FC = () => {
  const initialStateForm: Evaluacion = {
    evaluacion: "",
    preguntas: [],
  };

  const methods = useForm<Evaluacion>({
    defaultValues: initialStateForm,
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "preguntas",
  });

  const agregarPregunta = () => {
    append({ texto: "", tipo: "abierta", opciones: [] });
  };

  const onSubmit = (data: Evaluacion) => {
    console.log("Evaluación enviada:", data);
    toast.success("Evaluación guardada exitosamente");
  };

  const cargarEjemplo = () => {
    methods.setValue("evaluacion", "EVALUACION EJEMPLO TEXTO");
    methods.setValue("preguntas", [
      { texto: "Colabora de forma efectiva con los demás.", tipo: "abierta" },
      {
        texto: "Es accesible y dispuesto a ayudar a otros.",
        tipo: "likert",
        opciones: ["1", "2", "3", "4", "5"],
      },
      {
        texto:
          "¿En qué áreas crees que [Nombre del Empleado] podría mejorar su trabajo en equipo?",
        tipo: "multiple",
        opciones: [
          "Colaboración en reuniones",
          "Escuchar a los demás",
          "Delegación de tareas",
          "Organización de proyectos",
          "Otro",
        ],
      },
    ]);
    toast("Datos de evaluación agregados");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-4xl  mx-auto p-6 border rounded-md shadow-md bg-white"
      >
        {/* <button
          type="button"
          onClick={cargarEjemplo}
          className="bg-purple-500 text-white py-2 px-6 mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Agregar datos evaluación
        </button> */}
        <div className="flex justify-end gap-3 pt-2">
          <Button
          style="flex justify-center items-center gap-x-2"
            type="submit"
            text="Guardar Evaluación"
            icon={<SavedIcon />}
          />
        </div>

        <h1 className="text-2xl font-light text-gray-600 text-center mb-6">
          Formulario de Evaluación
        </h1>

        <InputFormContext
          name="evaluacion"
          title="Título de la evaluación"
          validations={{ required: true }}
        />

        {fields.map((pregunta, index) => (
          <div
            key={pregunta.id}
            className="mb-4 p-4 border mt-3 border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex justify-end items-center ">
              <Button onClick={() => remove(index)} icon={<DeleteIcon />} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputFormContext
                name={`preguntas.${index}.texto` as const}
                title="Titulo de la pregunta"
                validations={{ required: true }}
              />

              <InputSelectContext
                name={`preguntas.${index}.tipo` as const}
                title="Tipo de pregunta"
                options={[
                  { value: "abierta", title: "Abierta" },
                  { value: "likert", title: "Likert" },
                  { value: "multiple", title: "Múltiples opciones" },
                ]}
                validations={{ required: true }}
              />
            </div>

            {methods.watch(`preguntas.${index}.tipo`) === "likert" && (
              <div className="mt-2">
                <p className="text-sm mb-2">Selecciona tu nivel de acuerdo:</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {["1", "2", "3", "4", "5"].map((valor) => (
                    <label
                      key={valor}
                      className="flex flex-col items-center text-xs mx-1"
                    >
                      <input
                        type="radio"
                        name={`likert-${index}`}
                        value={valor}
                        className="mb-1 accent-blue-500"
                        disabled
                      />
                      {valor}
                      <span className="mt-1">
                        {valor === "1"
                          ? "Muy en desacuerdo"
                          : valor === "5"
                          ? "Muy de acuerdo"
                          : valor === "3"
                          ? "Neutral"
                          : valor === "2"
                          ? "En desacuerdo"
                          : "De acuerdo"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {methods.watch(`preguntas.${index}.tipo`) === "multiple" && (
              <div className="mt-2">
                <p className="text-sm font-medium mb-2">
                  Opciones de respuesta:
                </p>

                <OpcionesMultiples
                  control={methods.control}
                  register={methods.register}
                  index={index}
                />
              </div>
            )}

            {methods.watch(`preguntas.${index}.tipo`) === "abierta" && (
              <textarea
                rows={2}
                disabled
                placeholder="Respuesta del usuario"
                className="w-full p-3 border resize-none border-gray-300 rounded-lg shadow-sm mt-2"
              />
            )}
          </div>
        ))}

        <div className="flex justify-center gap-3 pt-2">
          <Button
            type="button"
            text="Anadir pregunta"
            onClick={agregarPregunta}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormularioEvaluacion;
