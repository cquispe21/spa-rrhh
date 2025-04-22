import { createContext, ReactNode } from "react";
import { IAuth } from "../../../domain/Auth/auth";
import useAuth from "../../../application/Auth/useAuth";
import { useNavigate } from "react-router-dom";

export interface IRegisterContext {
  AuthSet: (auth: IAuth) => void;
}

const RegisterContext = createContext({});

export const RegisteroProvider = ({ children }: { children: ReactNode }) => {
  const { Register } = useAuth();
    const navi = useNavigate();
  const AuthSet = async (auth: IAuth) => {
    try {
      const res = await Register(auth);
        if (res.resultado) {
            localStorage.setItem("token", res.token);
            navi("/inicio");
        }
    } catch (error) {
      console.log(error);
    }
  };
  const storage: IRegisterContext = {
    AuthSet,
  };

  return (
    <RegisterContext.Provider value={storage}>{children}</RegisterContext.Provider>
  );
};

export default RegisterContext;
