import { FormProvider, useForm } from "react-hook-form";
import { IAuth } from "../../../domain/Auth/auth";
import { useContext } from "react";
import LoginContext, { ILoginContext } from "../Context/LoginContext";
import { InputFormContext } from "../../../shared/Components/InputFormContext";

export default function LoginForm() {
  const initialStateForm: IAuth = {
    username: "",
    password: "",
  };

  const methods = useForm({
    defaultValues: initialStateForm,
  });

  const { AuthSet } = useContext(LoginContext) as ILoginContext;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={methods.handleSubmit(AuthSet)}>
            <InputFormContext
              name="username"
              title="Nombre de usuario"
              validations={{
                required: "Este campo es requerido",
              }}
            />
            <InputFormContext
              name="password"
              title="Contrase;a"
              validations={{
                required: "Este campo es requerido",
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 flex items-center gap-x-2 dark:bg-gray-900 dark:hover:bg-gray-900/50 my-2 hover:bg-blue-700 text-white  py-1.5 text-sm px-4 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Buscar
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
