import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";
import IndexLogin from "./feactures/Login/IndexLogin";
import ProtectedRoute from "./shared/Components/ProtectedRoute";
import Inicio from "./feactures/Inicio/Inicio";
import DasboardIndex from "./feactures/Dashboard/DashboardIndex";
import EvaluacionIndex from "./feactures/Evaluacion/EvaluacionIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLogin />} />
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/inicio" element={<Inicio />}>
            <Route index element={<DasboardIndex />} />
            <Route path="employees" element={<></>} />
            <Route path="evaluations" element={<EvaluacionIndex />} />
            <Route path="evaluations/id" element={<></>} />
            <Route path="evaluations/employee/:id" element={<></>} />
            <Route path="feedback" element={<></>} />
            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
