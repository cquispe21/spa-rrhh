import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Button from "@/shared/Components/Button";
import ModalCreateEmployees from "./ModalCreateEmployees";
import { useContext } from "react";
import EmployeesContext, { IEmployeesContext } from "../Context/EmployeesContext";
import moment from "moment";

export default function Employees() {
    const {isOpen,toggleModal,EmployeesList} = useContext(EmployeesContext) as IEmployeesContext;
    return (
        <>
        <ModalCreateEmployees isOpen={isOpen} onClose={toggleModal}/>
        <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Employees</h1>
  
          <Button
            text="Crear Evaluación"
            style="bg-[#374151] hover:bg-[#313a48]"
           onClick={toggleModal}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employees</TableHead>
              <TableHead>Username</TableHead>
              {/* <TableHead>Identification</TableHead> */}
              <TableHead>Fecha Creaction</TableHead>
              <TableHead>Fecha Modificacion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {EmployeesList?.map((employees) => (
              <TableRow key={employees._id}>
                <TableHead>{employees.names}</TableHead>
                <TableHead>{employees.identification}</TableHead>
                <TableHead>{moment(employees.createdAt).format("YYYY-MM-DD")}</TableHead>
                <TableHead>  {moment(employees.updatedAt).format("YYYY-MM-DD")}</TableHead>
                {/* <TableHead>
                  <Button
                    text="Ver Detalles"
                    style="bg-[#374151] hover:bg-[#313a48]"
                    onClick={async () => {
                      await searchEvaluationId(evaluation.idEvaluacion!);
                      navigate(`/360/evaluations/${evaluation.idEvaluacion}`);
                    }}
                  />
                </TableHead> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </>

    );
    }
