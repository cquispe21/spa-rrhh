import { createContext, ReactNode, useContext } from "react";
import { IAuthRegister } from "../../../domain/Auth/auth";
import useAuth from "../../../application/Auth/useAuth";
import EmployeesContext, { IEmployeesContext } from "./EmployeesContext";
import { toast } from "sonner";

export interface IRegisterContext {
  AuthSet: (auth: IAuthRegister) => void;
}

const RegisterContext = createContext({});

export const RegisteroProvider = ({ children }: { children: ReactNode }) => {
  const { Register } = useAuth();
  const {toggleModal,EmployeesAll} = useContext(EmployeesContext) as IEmployeesContext;
  const AuthSet = async (auth: IAuthRegister) => {
    try {
      await Register(auth);
      toggleModal();
      EmployeesAll();
    } catch (error) {
      console.log(error);
      // toast.error((error as Error).message || "An unexpected error occurred");
    }
  };
  const storage: IRegisterContext = {
    AuthSet,
  };

  return (
    <RegisterContext.Provider value={storage}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
