import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeScreen from "./screen/AddEmployeeScreen";
import ListEmployeeScreen from "./screen/ListEmployeeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmployeeScreen />} />
        <Route path="/list" element={<ListEmployeeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
