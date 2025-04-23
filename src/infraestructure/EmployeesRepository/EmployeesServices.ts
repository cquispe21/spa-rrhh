import { IEmployeesServices } from "@/application/Employees/employees";
import { IEmployee } from "@/domain/Employees/employess";
import EmployeesClient from "../../utils/configuration";

export default function EmployeesServices(): IEmployeesServices {
  const EmployeesAll = async (): Promise<IEmployee[]> => {
    try {
      const response = await EmployeesClient.get("employees").then((res) => res.data.data);
      return response;
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  };

  return { EmployeesAll };
}
