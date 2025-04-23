import React, { useContext, useEffect } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import Button from "../../../shared/Components/Button";
import DeleteIcon from "../../../icons/DeleteIcon";
import { OpcionesMultiples } from "./OpcionesMultiples";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import InputSelectContext from "../../../shared/Components/InputSelectContext";
import SavedIcon from "../../../icons/SavedIcon";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
import EvaluacionContext, {
  IEvaluacionContext,
} from "../Context/EvaluacionContext";
import { mockEvaluaciones } from "@/utils/data";

const FormularioEvaluacion: React.FC = () => {
  const { guardarEvaluacion,EvaluationId } = useContext(
    EvaluacionContext
  ) as IEvaluacionContext;

  const initialStateForm: Evaluacion = {
    idEvaluacion: "",
    title: "",
    questions: [],
    description: "",
    fechaCreacion: new Date(),
  };

  const methods = useForm<Evaluacion>({
    defaultValues: initialStateForm,
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "questions",
  });

  const agregarPregunta = () => {
    append({ text: "", type: "abierta", options: [] });
  };

  const onSubmit = async (data: Evaluacion) => {
    if(data.idEvaluacion === "") data.idEvaluacion = crypto.randomUUID();
    await guardarEvaluacion(data);
    methods.reset(
      initialStateForm
    );
  };

  const EncuestaTest  = () => {
    methods.reset(mockEvaluaciones[0])
  }
  useEffect(() => {
    console.log("estoy en el useffect de evaluacionId", EvaluationId);
    if (EvaluationId && Object.keys(EvaluationId).length > 0) {
      methods.reset(EvaluationId);
    }
  }, [EvaluationId, methods]);
  

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-4xl  mx-auto p-6 border border-[#E5E7EB] rounded-md shadow-md bg-[#FFFFFF ]"
      >
        <div className="flex justify-end gap-3 pt-2">
          <Button
            style="flex justify-center items-center gap-x-2"
            type="submit"
            text="Guardar Evaluación"
            icon={<SavedIcon />}
          />
          <Button
            style="flex justify-center items-center gap-x-2"
         onClick={EncuestaTest}
            text="Llenar Evaluación Test"
            icon={<SavedIcon />}
          />
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
            <div className="flex justify-end items-center ">
              <Button onClick={() => remove(index)} icon={<DeleteIcon />} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputFormContext
                name={`questions.${index}.text` as const}
                title="Titulo de la pregunta"
                validations={{ required: true }}
              />

              <InputSelectContext
                name={`questions.${index}.type` as const}
                title="Tipo de pregunta"
                options={[
                  { value: "abierta", title: "Abierta" },
                  { value: "likert", title: "Likert" },
                  { value: "multiple", title: "Múltiples opciones" },
                ]}
                validations={{ required: true }}
              />
            </div>

            {methods.watch(`questions.${index}.type`) === "likert" && (
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

            {methods.watch(`questions.${index}.type`) === "multiple" && (
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

            {methods.watch(`questions.${index}.type`) === "abierta" && (
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
