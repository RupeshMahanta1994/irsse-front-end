import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <h1 className="bg-blue-500">app</h1>
      <Navbar />
      <HomePage />
      <About />
    </>
  );
}

export default App;
