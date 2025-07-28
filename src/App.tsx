import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Bg from "./Components/Bg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BodyHello from "./Components/Pages/Hello/Body";
import BodyAbout from "./Components/Pages/About/Body";
import BodyProjects from "./Components/Pages/Projects/Body";
import NoFile from "./Components/Pages/About/NoFile";

function App() {
  return (
    <Router>
      <Bg>
        <Header />
        <Routes>
          <Route path="/no-file" element={<NoFile />} />
          <Route path="/" element={<BodyHello />} />
          <Route path="/about-me" element={<BodyAbout />} />
          <Route path="/projects" element={<BodyProjects />} />
        </Routes>
        <Footer />
      </Bg>
    </Router>
  );
}

export default App;
