import React, { useContext, useEffect } from "react";
import {
  useForm,
  useFieldArray,
  FormProvider,
  Controller,
} from "react-hook-form";
import Button from "../../../shared/Components/Button";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import SavedIcon from "../../../icons/SavedIcon";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";

import { mockEvaluaciones } from "@/utils/data";
import EvaluacionContext, {
  IEvaluacionContext,
} from "@/feactures/Evaluacion/Context/EvaluacionContext";
import MiEvaluacionContext, {
  IMiEvaluacionContext,
} from "../Context/MiEvaluacionContext";

const MyFormularioEvaluacion: React.FC = () => {
  const {  EvaluationId, updateEvaluation } = useContext(
    EvaluacionContext
  ) as IEvaluacionContext;

  const { myEvaluation } = useContext(
    MiEvaluacionContext
  ) as IMiEvaluacionContext;

  const initialStateForm: Evaluacion = {
    idEvaluacion: "",
    title: "",
    questions: [
      {
        text: "",
        type: "",
        options: [],
        respuesta: [],
      },
    ],

    description: "",
    fechaCreacion: new Date(),
  };

  const methods = useForm<Evaluacion>({
    defaultValues: initialStateForm,
    mode: "all",
  });

  const { fields, append } = useFieldArray({
    control: methods.control,
    name: "questions",
  });

  const agregarPregunta = () => {
    append({ text: "", type: "abierta", options: [] });
  };

  const onSubmit = async (data: Evaluacion) => {
    console.log(data);
  };

  const onSubitEditar = async (data: Evaluacion) => {
    await updateEvaluation(data.idEvaluacion!, data);
    methods.reset(initialStateForm);
  };

  const EncuestaTest = () => {
    methods.reset(mockEvaluaciones[0]);
  };

  const estadoFormulario = () => {
    if (EvaluationId && Object.keys(EvaluationId).length > 0) {
      return methods.reset(EvaluationId);
    }
  };
  useEffect(() => {
    estadoFormulario();
    methods.reset(myEvaluation);
  }, [EvaluationId, methods]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(EvaluationId ? onSubitEditar : onSubmit)}
        className="max-w-4xl  mx-auto p-6 border border-[#E5E7EB] rounded-md shadow-md bg-[#FFFFFF ]"
      >
        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 sm:gap-3 p-2 w-full">
          <Button
            style="w-full sm:w-auto flex justify-center items-center gap-x-2"
            type="submit"
            text="Guardar Evaluación"
            icon={<SavedIcon />}
          />
          {/* <Button
            style="w-full sm:w-auto flex justify-center items-center gap-x-2"
            onClick={EncuestaTest}
            text="Llenar Evaluación Test"
            icon={<SavedIcon />}
          /> */}
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Formulario de Evaluación
        </h1>

        <div className="flex flex-col gap-4 mb-4">
          <InputFormContext
            name="title"
            title="Título de la evaluación"
            validations={{ required: true }}
          />

          <InputFormContext
            name="description"
            title="Descripción de la evaluación"
            validations={{ required: true }}
          />
        </div>

        {fields.map((pregunta, index) => (
          <div
            key={pregunta.id}
            className="mb-4 p-4 border mt-3 border-gray-300 rounded-lg shadow-sm"
          >
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
              <InputFormContext
                name={`questions.${index}.text` as const}
                title="Titulo de la pregunta"
                validations={{ required: true }}
                disabled
              />
            </div>
            {methods.watch(`questions.${index}.type`) === "likert" && (
              <div className="mt-2">
                <p className="text-sm mb-2">Selecciona tu nivel de acuerdo:</p>
                <div className="flex flex-wrap justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200 gap-2 sm:gap-4">
                  {["1", "2", "3", "4", "5"].map((valor) => (
                    <label
                      key={valor}
                      className="flex flex-col items-center text-[11px] sm:text-xs mx-1 w-[30%] sm:w-auto flex-grow sm:flex-grow-0 text-center"
                    >
                      <input
                        type="radio"
                        {...methods.register(
                          `questions.${index}.respuesta` as const,
                          { required: true }
                        )}
                        value={valor}
                        className="mb-1 accent-blue-500"
                      />
                      <span className="font-semibold">{valor}</span>
                      <span className="mt-1 text-[10px] sm:text-xs leading-tight">
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
            {methods.watch(`questions.${index}.type`) === "multiple" && (
              <div className="mt-2">
                <p className="text-sm mb-2">Selecciona una o más opciones:</p>
                <Controller
                  control={methods.control}
                  name={`questions.${index}.respuesta`}
                  defaultValue={[]}
                  render={({ field: { value = [], onChange } }) => (
                    <div className="flex flex-wrap gap-2">
                      {pregunta?.options?.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="checkbox"
                            value={option}
                            checked={value.includes(option)}
                            onChange={() => {
                              if (value.includes(option)) {
                                onChange(
                                  Array.isArray(value) ? value.filter((v: string) => v !== option) : []
                                );
                              } else {
                                onChange([...value, option]);
                              }
                            }}
                            className="accent-blue-500"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                />
              </div>
            )}

            {methods.watch(`questions.${index}.type`) === "abierta" && (
              <textarea
                rows={2}
                {...methods.register(
                  `questions.${index}.respuesta`,
                  { required: true }
                )}
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

export default MyFormularioEvaluacion;
