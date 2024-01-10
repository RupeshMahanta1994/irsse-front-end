import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Milestone,
  AddMember,
  GM,
  NationalAwardee,
  General,
  SeniorityList,
  Transfer,
  AxleCounter,
  SOR,
  Telecom,
  Artcles,
} from "./Pages";

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
          <Route path="/national-awardee" element={<NationalAwardee />} />
          <Route path="/general" element={<General />} />
          <Route path="/seniority" element={<SeniorityList />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/axlecounter" element={<AxleCounter />} />
          <Route path="/sheduleofrates" element={<SOR />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/article" element={<Artcles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
