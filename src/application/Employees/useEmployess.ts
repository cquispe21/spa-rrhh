import { IEmployee } from "@/domain/Employees/employess";
import EmployeesServices from "@/infraestructure/EmployeesRepository/EmployeesServices";

export default function useEmployess() {
  const { EmployeesAll } = EmployeesServices();

  const getEmployeesall = async (): Promise<IEmployee[]> => {
    try {
      return await EmployeesAll();
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  };

  return { getEmployeesall };
}
