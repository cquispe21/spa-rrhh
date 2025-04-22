import React, { useContext } from "react";
import {
  useForm,
  useFieldArray,
  FormProvider,
} from "react-hook-form";
import { toast } from "sonner";
import Button from "../../../shared/Components/Button";
import DeleteIcon from "../../../icons/DeleteIcon";
import { OpcionesMultiples } from "./OpcionesMultiples";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import InputSelectContext from "../../../shared/Components/InputSelectContext";
import SavedIcon from "../../../icons/SavedIcon";
import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
import EvaluacionContext, { IEvaluacionContext } from "../Context/EvaluacionContext";



const FormularioEvaluacion: React.FC = () => {

  const {guardarEvaluacion  } = useContext(EvaluacionContext) as IEvaluacionContext;

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

  const onSubmit = async (data: Evaluacion) => {
    await guardarEvaluacion(data);
    methods.reset();
  };

 

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
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
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
            className="mb-4 p-4 border mt-3 border-gray-300 rounded-lg shadow-sm"
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
