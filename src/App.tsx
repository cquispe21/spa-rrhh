import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";
import IndexLogin from "./feactures/Login/IndexLogin";
import ProtectedRoute from "./shared/Components/ProtectedRoute";
import Inicio from "./feactures/Inicio/Inicio";
import DasboardIndex from "./feactures/Dashboard/DashboardIndex";
import EvaluacionIndex from "./feactures/Evaluacion/EvaluacionIndex";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/Auth/auth.slice";
import EmployeesIndex from "./feactures/Register/EmployeesIndex";
import MisEvaluacionesIndex from "./feactures/MisEvaluaciones/MiEvaluacionIndex";

function App() {
  const dispatch = useDispatch();
  const dataUser = localStorage.getItem("user");
  const user = dataUser ? JSON.parse(dataUser) : null;
  dispatch(setUser(user));
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLogin />} />
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/360" element={<Inicio />}>
            <Route index element={<DasboardIndex />} />
            <Route path="employees" element={<EmployeesIndex/>} />
            <Route path="evaluation" element={<EvaluacionIndex />} />
            <Route path="evaluations/create" element={<EvaluacionIndex />} />
            <Route path="myevaluations" element={<MisEvaluacionesIndex />} />
            <Route path="myevaluations/:id" element={<MisEvaluacionesIndex />} />
            <Route path="evaluations/:id" element={<EvaluacionIndex />} />
            <Route path="evaluations/employee/:id" element={<></>} />
            <Route path="feedback" element={<></>} />
            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
