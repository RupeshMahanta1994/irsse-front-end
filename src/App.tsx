import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Milestone, AddMember, GM } from "./Pages";

function App() {
  return (
    <>
      <h1 className="bg-blue-500">app</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/additionalMember" element={<AddMember />} />
          <Route path="/gm" element={<GM />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
