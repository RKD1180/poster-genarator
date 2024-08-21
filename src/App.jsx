import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preview from "./pages/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
