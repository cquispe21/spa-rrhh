import Employees from "./Components/Employees";
import { EmployeesoProvider } from "./Context/EmployeesContext";
import { RegisteroProvider } from "./Context/RegisterContext";

export default function EmployeesIndex() {
  return (
    <EmployeesoProvider>
    <RegisteroProvider>
      <Employees />
    </RegisteroProvider>
    </EmployeesoProvider>
  );
}
