import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-[Inter]">
      <Navbar />
      <br />
      <br />
      <Header />
    </div>
  );
}

export default App;
