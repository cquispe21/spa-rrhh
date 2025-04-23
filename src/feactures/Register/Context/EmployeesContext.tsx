import { createContext, ReactNode, useState } from "react";

export interface IEmployeesContext {
  toggleModal: () => void;
  isOpen: boolean;
}

const EmployeesContext = createContext({});

export const EmployeesoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const storage: IEmployeesContext = {
    toggleModal,
    isOpen
  };

  return (
    <EmployeesContext.Provider value={storage}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContext;
