import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/HomePage/Contact";
import Home from "./Pages/HomePage/Home";
import Portfolio from "./Pages/HomePage/Portfolio";
import Team from "./Pages/HomePage/Team";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
