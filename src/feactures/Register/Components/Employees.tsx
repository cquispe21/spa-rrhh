import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Button from "@/shared/Components/Button";
import { useNavigate } from "react-router-dom";
import ModalCreateEmployees from "./ModalCreateEmployees";
import { useContext } from "react";
import EmployeesContext, { IEmployeesContext } from "../Context/EmployeesContext";

export default function Employees() {
    const navigate = useNavigate();
    const {isOpen,toggleModal} = useContext(EmployeesContext) as IEmployeesContext;
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
              <TableHead>Nombre</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Fecha de Creacion</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {Evaluationlist?.map((evaluation) => (
              <TableRow key={evaluation.idEvaluacion}>
                <TableHead>{evaluation.evaluacion}</TableHead>
                <TableHead>{evaluation.descripcion}</TableHead>
                <TableHead>{evaluation.fechaCreacion && "11/202/205"}</TableHead>
                <TableHead>
                  <Button
                    text="Ver Detalles"
                    style="bg-[#374151] hover:bg-[#313a48]"
                    onClick={async () => {
                      await searchEvaluationId(evaluation.idEvaluacion!);
                      navigate(`/360/evaluations/${evaluation.idEvaluacion}`);
                    }}
                  />
                </TableHead>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
      </>

    );
    }
