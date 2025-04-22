import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import IndexLogin from "./feactures/Login/IndexLogin";
import ProtectedRoute from "./shared/Components/ProtectedRoute";
import Inicio from "./feactures/Inicio/Inicio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLogin />} />

        <Route path="*" element={<Navigate to={"/"} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/inicio" element={<Inicio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
