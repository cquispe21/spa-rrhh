import { useFormContext } from "react-hook-form";

interface IRadioOption {
  label: string;
  value: string;
}

interface IRadioFormContext {
  name: string;
  title: string;
  options: IRadioOption[];
  validations?: any;
  disabled?: boolean;
  classNameI?: string;
}

export const RadioFormContext = ({
  name,
  title,
  options,
  validations,
  disabled = false,
  classNameI,
}: IRadioFormContext) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`text-xm ${classNameI}`}>
      <label className={`block mb-1 ${errors[name] ? "text-red-600" : "text-gray-700 dark:text-gray-300"}`}>
        <p className="dark:text-white">{title}</p>
      </label>

      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200"
          >
            <input
              type="radio"
              value={option.value}
              {...register(name, validations)}
              disabled={disabled}
              className="form-radio text-blue-600 focus:ring-blue-500"
            />
            {option.label}
          </label>
        ))}
      </div>

      {errors[name]?.type === "required" && (
        <span className="text-red-600 text-[10px]">
          El campo {title.toLowerCase()} es requerido.
        </span>
      )}
    </div>
  );
};
