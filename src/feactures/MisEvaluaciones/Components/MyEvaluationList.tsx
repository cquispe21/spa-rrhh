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

import MiEvaluacionContext, {
  IMiEvaluacionContext,
} from "../Context/MiEvaluacionContext";

export default function MyEvaluationList() {
  const navigate = useNavigate();

  const { myEvaluation } = useContext(
    MiEvaluacionContext
  ) as IMiEvaluacionContext;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mis Evaluaciones</h1>

        
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="lg:table-cell md:table-cell hidden">
              Nombre
            </TableHead>
            <TableHead className="lg:table-cell md:table-cell hidden">
              Descripción
            </TableHead>
            <TableHead className="lg:table-cell md:table-cell hidden">
              Fecha de Creacion
            </TableHead>
            <TableHead className="lg:table-cell md:table-cell hidden">
              Acciones
            </TableHead>
            <TableHead className="lg:hidden md:hidden">Informacion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              idEvaluacion: 1,
              title: "Evaluación de Desempeño",
              description: "Evaluación anual de desempeño",
              fechaCreacion: "2023-01-15",
            },
            {
              idEvaluacion: 2,
              title: "Evaluación de Habilidades",
              description: "Evaluación de habilidades técnicas",
              fechaCreacion: "2023-02-20",
            },
          ].map((evaluation) => (
            <TableRow key={evaluation.idEvaluacion}>
              <TableHead className="lg:table-cell md:table-cell hidden">
                {evaluation.title}
              </TableHead>
              <TableHead className="lg:table-cell md:table-cell hidden">
                {evaluation.description}
              </TableHead>
              <TableHead className="lg:table-cell md:table-cell hidden">
                {evaluation.fechaCreacion}
              </TableHead>
              <TableHead className="lg:hidden md:hidden">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">{evaluation.title}</h1>
                  <p className="text-sm text-gray-500">
                    {evaluation.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {evaluation.fechaCreacion}
                  </p>
                </div>
              </TableHead>
              <TableHead className="flex items-center justify-center">
                <Button
                  style="bg-[#374151] hover:bg-[#313a48]"
                  onClick={() => {
                    navigate(`/360/myevaluations/${myEvaluation.idEvaluacion}`);
                  }}
                  text="Editar"
                />
              </TableHead>
            </TableRow>
          ))}

          <>
            <tr>
              <p
                onClick={() => {
                  navigate(`/360/myevaluations/${myEvaluation.idEvaluacion}`);
                }}
              ></p>
            </tr>
          </>
          {/* {Evaluationlist!.length === 0 && (
            <TableRow>
              <TableHead colSpan={4} className="text-center">
                No hay evaluaciones
              </TableHead>
            </TableRow>
          )} */}
          {/* {Evaluationlist!.length > 0 && (
            <TableRow>
              <TableHead colSpan={4} className="text-center">
                No hay evaluaciones
              </TableHead>
            </TableRow>
          )} */}

          {/* {Evaluationlist!.map((evaluation) => (
            <TableRow key={evaluation.idEvaluacion}>
              <TableHead className="lg:table-cell md:table-cell hidden">{evaluation.title}</TableHead>
              <TableHead className="lg:table-cell md:table-cell hidden">{evaluation.description}</TableHead>
              <TableHead className="lg:table-cell md:table-cell hidden">
                {moment(evaluation.fechaCreacion).format("YYYY-MM-DD")}
              </TableHead>
              <TableHead className="lg:hidden md:hidden">

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">{evaluation.title}</h1>
                  <p className="text-sm text-gray-500">{evaluation.description}</p>
                  <p className="text-sm text-gray-500">
                    {moment(evaluation.fechaCreacion).format("YYYY-MM-DD")}
                  </p>
                </div>
              </TableHead>

              <TableHead
              className="flex items-center justify-center"
              >
                <Button
                  style="bg-[#374151]  hover:bg-[#313a48]"
                  onClick={async () => {
                    await searchEvaluationId(evaluation.idEvaluacion!);
                    navigate(`/360/evaluations/${evaluation.idEvaluacion}`);
                  }}
                  icon={<EditIcon />}
                />
              </TableHead>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
}
