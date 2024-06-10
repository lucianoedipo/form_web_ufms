import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Report from "./pages/Report";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
