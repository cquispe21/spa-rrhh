import { useFormContext } from "react-hook-form";

interface IFormContext {
  name: string;
  validations: any;
  pattern?: string;
  disabled?: boolean;
  onChange?: any;
  max?: number;
  value?: string;
  title: string;
  isHook?: boolean;
  isPlaceHolder?: string;
  classNameI?: string;
  rows?: number;
  cols?: number;
}

export const TextAreaFormContext = ({
  name,
  validations,
  disabled,
  onChange,
  max,
  value,
  title,
  isPlaceHolder,
  classNameI,
  rows = 4,
  cols,
}: IFormContext) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const StyleInput =
    "border-gray-300 focus:outline-none dark:bg-gray-900 duration-200 transition-all dark:border-none left-0 relative focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-2 text-ms py-2 space-x-0";
  const StyleInputError =
    "border-red-500 focus:outline-none left-0 relative duration-200 transition-all focus:border-red-500 focus:ring-red-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-ms py-1.5 space-x-0";

  return (
    <div className={`text-xm ${classNameI}`}>
      <label
        htmlFor={title}
        className={
          errors[name]
            ? "w-full text-red-600 my-auto text-w flex flex-col text-sm gap-2"
            : "w-full text-gray-600 dark:text-gray-300 my-auto flex flex-col text-sm gap-2"
        }
      >
        <p className="dark:text-white">{title}</p>
        <textarea
          {...register(name, validations)}
          disabled={disabled || false}
          placeholder={isPlaceHolder}
          onChange={onChange}
          maxLength={max}
          value={value}
          rows={rows}
          cols={cols}
          className={errors[name] ? StyleInputError : StyleInput}
          id={title}
        />
        {errors[name]?.type === "required" && (
          <span className="text-red-600 text-[10px]">
            El Campo {title.toLowerCase()} es requerido.
          </span>
        )}
      </label>
    </div>
  );
};
