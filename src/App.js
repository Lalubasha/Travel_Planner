import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import TourPackage from "./pages/TourPackage";
import DetailPackage from "./pages/DetailPackage";
import ContactUs from "./pages/ContactUs";

function App() {

  return<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour-package" element={<TourPackage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/tour-package/:tourPackageId" element={<DetailPackage />} />
    </Routes>
      
  </>
   
  
}
export default App;