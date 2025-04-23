import { createContext, ReactNode } from "react";
import { IAuthRegister } from "../../../domain/Auth/auth";
import useAuth from "../../../application/Auth/useAuth";

export interface IRegisterContext {
  AuthSet: (auth: IAuthRegister) => void;
}

const RegisterContext = createContext({});

export const RegisteroProvider = ({ children }: { children: ReactNode }) => {
  const { Register } = useAuth();
  const AuthSet = async (auth: IAuthRegister) => {
    try {
    console.log(auth);
    await Register(auth);
    } catch (error) {
      console.log(error);
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
