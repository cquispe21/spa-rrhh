import { IEmployee } from "@/domain/Employees/employess";

export interface IEmployeesServices {
  EmployeesSaved?: (employee: IEmployee) => Promise<boolean>;
  EmployeesAll: () => Promise<IEmployee[]>;
  EmployeesSearcId?: (idEmployee: string) => Promise<IEmployee | null>;
}
