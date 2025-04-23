import useEmployess from "@/application/Employees/useEmployess";
import { IEmployee } from "@/domain/Employees/employess";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IEmployeesContext {
  toggleModal: () => void;
  isOpen: boolean;
  EmployeesList: IEmployee[];

  EmployeesAll: () => Promise<void>;
}

const EmployeesContext = createContext({});

export const EmployeesoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [EmployeesList, setEmployeesList] = useState<IEmployee[]>([]);

const {getEmployeesall} = useEmployess();

  const EmployeesAll = async () => {
    const employees = await getEmployeesall();
    setEmployeesList(employees);
  }

  useEffect(() => {
    EmployeesAll();
  }, []);


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const storage: IEmployeesContext = {
    toggleModal,
    isOpen,
    EmployeesAll,
    EmployeesList
  };

  return (
    <EmployeesContext.Provider value={storage}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContext;
