import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Pieces from "./components/pages/Pieces";
import EditPiece from "./components/pages/EditPiece";
import CreatePiece from "./components/pages/CreatePiece";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Pieces" element={<Pieces />} />
        <Route path="/EditPiece/:id" element={<EditPiece />} />
        <Route path="/CreatePiece" element={<CreatePiece />} />
      </Routes>
    </Router>
  );
}

export default App;
