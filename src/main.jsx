import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vitrine from "./containers/vitrine";
import Especificacao from "./containers/especificacao";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/product/:id" element={<Especificacao/>} />
      </Routes>
    </Router>
  </StrictMode>
);


