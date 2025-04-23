import { useFieldArray } from "react-hook-form";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import Button from "../../../shared/Components/Button";
import DeleteIcon from "../../../icons/DeleteIcon";

export const OpcionesMultiples = ({
  control,
  register,
  index,
}: {
  control: any;
  register: any;
  index: number;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options` as const,
  });

  return (
    <div className="">
      {fields.map((field, i) => (
        <div key={field.id} className="flex w-full items-center gap-2 mb-2"> 
        <div className="w-full">

          <InputFormContext
            name={`questions.${index}.options.${i}` as const}
            validations={{ required: true }}
            title={`Opción ${i + 1}`}
          />
        </div>

          <div className="block w-full">

          <Button
            type="button"
            onClick={() => remove(i)}
            icon={<DeleteIcon />}
          />
          </div>

        </div>
      ))}
      <button
        type="button"
        onClick={() => append("")}
        className="text-blue-500 text-sm mt-1"
      >
        + Agregar opción
      </button>
    </div>
  );
};
