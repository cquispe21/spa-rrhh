import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
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
            <Route path="evaluacion" element={<EvaluacionIndex />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
