import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="Banner" element={<Banner />} />
            <Route path="About" element={<About />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Project" element={<Project />} />
            <Route path="Services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/" index element={<Footer />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
