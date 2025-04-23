import Button from "@/shared/Components/Button";
import { InputFormContext } from "@/shared/Components/InputFormContext";
import InputSelectContext from "@/shared/Components/InputSelectContext";
import { ModalGeneral } from "@/shared/Components/Modal/ModalDefault";
import { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RegisterContext, { IRegisterContext } from "../Context/RegisterContext";

interface ModalCreateEmployeesIPropsItems {
  isOpen: boolean;
  onClose: () => void;
  stateEdit?: boolean;
}

interface CreateEmployees {
  idRol: number;
  email: string;
  username: string;
  password: string;
  names: string;
  identification: string;
}

export default function ModalCreateEmployees({
  isOpen,
  onClose,
}: ModalCreateEmployeesIPropsItems) {
  const InitialState: CreateEmployees = {
    idRol: 3,
    email: "",
    username: "",
    password: "",
    names: "",
    identification: "",
  };

  const methods = useForm({ defaultValues: InitialState });

  const { AuthSet } = useContext(RegisterContext) as IRegisterContext;

  useEffect(() => {
    if (!isOpen) {
      methods.reset(InitialState);
    }
  }, [isOpen]);

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(AuthSet)}>
          <div className="grid grid-cols-2 gap-2">
            <InputFormContext
            classNameI="col-span-2"
              name="names"
              title="Nombres Completos"
              validations={{
                required: "Este campo es requerido",
              }}
            />

            <InputFormContext
              name="identification"
              title="Identificación"
              validations={{
                required: "Este campo es requerido",
              }}
            />
            <InputFormContext
              name="username"
              title="Nombre de usuario"
              validations={{
                required: "Este campo es requerido",
              }}
            />

            <InputFormContext
              name="password"
              title="Contraseña"
              validations={{
                required: "Este campo es requerido",
              }}
            />

            <InputFormContext
              name="email"
              type="email"
              title="Correo electrónico"
              validations={{
                required: "Este campo es requerido",
              }}
            />

            <InputSelectContext
              name="idRol"
              title="Seleccionar Rol"
              options={[
                { value: "1", title: "Admin" },
                { value: "2", title: "Manager" },
                { value: "3", title: "Employee" },
              ]}
              validations={{
                required: "Este campo es requerido",
              }}
            />

            <Button type="submit" style="col-span-2" text="Guardar" />
          </div>
        </form>
      </FormProvider>
    </ModalGeneral>
  );
}
