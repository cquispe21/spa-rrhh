import EvaluationIcon from "@/icons/EvaluationIcon";
import HomeIcon from "@/icons/HomeIcon";
import EmployeesIcon from "@/icons/EmployeesIcon";

interface MenuItem {
  to: string;
  label: string;
  icon: JSX.Element;
}

export const menuItems: MenuItem[] = [
  {
    to: "/",
    label: "Home",
    icon: <HomeIcon style="icon-style" />,
  },
  {
    to: "/360/evaluation",
    label: "Evaluaciones Creadas",
    icon: <EvaluationIcon style="icon-style" />,
  },
  {
    to: "/360/myevaluations",
    label: "Mis Evaluaciones",
    icon: <EvaluationIcon style="icon-style" />,
  },
  {
    to: "/360/employees",
    label: "Employees",
    icon: <EmployeesIcon style="icon-style" />,
  },
];
