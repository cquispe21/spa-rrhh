import { FormProvider, useForm } from "react-hook-form";
import { IAuth } from "../../../domain/Auth/auth";
import { useContext } from "react";
import LoginContext, { ILoginContext } from "../Context/LoginContext";
import { InputFormContext } from "../../../shared/Components/InputFormContext";
import ModalCreateEmployees from "@/feactures/Register/Components/ModalCreateEmployees";
import EmployeesContext, {
  IEmployeesContext,
} from "@/feactures/Register/Context/EmployeesContext";

export default function LoginForm() {
  const initialStateForm: IAuth = {
    username: "",
    password: "",
  };

  const methods = useForm({
    defaultValues: initialStateForm,
  });

  const { AuthSet } = useContext(LoginContext) as ILoginContext;
  const { isOpen, toggleModal, EmployeesList } = useContext(
    EmployeesContext
  ) as IEmployeesContext;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ModalCreateEmployees isOpen={isOpen} onClose={toggleModal} />

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p>
          Registrarse{" "}
          <button onClick={toggleModal} className="text-blue-500 hover:underline">
            aqui
          </button>
        </p>
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
              Iniciar sesión
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
