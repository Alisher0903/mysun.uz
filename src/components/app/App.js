import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Search from "../search/Search";
import ForBusiness from "../forBusiness/ForBusiness";
import PrivateIndividual from "../privateIndividuals/PrivateIndividual";
import Products from "../products/Products";
import Warranty from "../warranty/Warranty";
import AboutCompany from "../company/AboutCompany";
import Projects from "../projects/Projects";
import Blog from "../blogMy/Blog";
import Contact from "../contac/Contact";


// yaxshi zur buladi

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/business" element={<ForBusiness />} />
        <Route path="/private/individuals" element={<PrivateIndividual />} />
        <Route path="/products" element={<Products />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
