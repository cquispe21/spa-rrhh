import { createContext, ReactNode } from "react";
import { IAuth } from "../../../domain/Auth/auth";
import useAuth from "../../../application/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/Auth/auth.slice";

export interface ILoginContext {
  AuthSet: (auth: IAuth) => void;
}

const LoginContext = createContext({});

export const LoginoProvider = ({ children }: { children: ReactNode }) => {
  const { Auth } = useAuth();
    const navi = useNavigate();
    const dispatch = useDispatch();
  const AuthSet = async (auth: IAuth) => {
    try {
      const res = await Auth(auth);
        if (res) {
            localStorage.setItem("token",res.token);
            localStorage.setItem("user",JSON.stringify(res));
            dispatch(setUser(res));
            navi("/inicio");
        }
    } catch (error) {
      console.log(error);
    }
  };
  const storage: ILoginContext = {
    AuthSet,
  };

  return (
    <LoginContext.Provider value={storage}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;
