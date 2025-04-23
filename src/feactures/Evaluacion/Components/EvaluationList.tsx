import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "@/shared/Components/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EvaluacionContext, {
  IEvaluacionContext,
} from "../Context/EvaluacionContext";

import moment from "moment";


export default function EvaluacionList() {
  const navigate = useNavigate();

  const { Evaluationlist, searchEvaluationId } = useContext(
    EvaluacionContext
  ) as IEvaluacionContext;
  console.log(Evaluationlist);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Evaluaciones</h1>

        <Button
          text="Crear Evaluación"
          style="bg-[#374151] hover:bg-[#313a48]"
          onClick={() => {
            navigate("/360/evaluations/create");
          }}
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
          {Evaluationlist!.map((evaluation) => (
            <TableRow key={evaluation.idEvaluacion}>
              <TableHead>{evaluation.title}</TableHead>
              <TableHead>{evaluation.description}</TableHead>
              <TableHead>

              {moment(evaluation.fechaCreacion).format("YYYY-MM-DD")}

              </TableHead>
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
