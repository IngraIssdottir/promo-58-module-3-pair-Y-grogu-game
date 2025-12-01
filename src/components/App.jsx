import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "../styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
