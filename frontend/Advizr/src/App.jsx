import FrontPage from "./components/home-page/FrontPage.jsx";
import AiPage from "./components/ai-page/AiPage.jsx";
import Navbar from "./Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/advisor" element={<AiPage />} />
      </Routes>
    </>
  );
}

export default App;
