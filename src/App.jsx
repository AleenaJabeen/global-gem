import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from './pages/About'
import Package from "./pages/Package";
import Destinations from "./pages/Destinations";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
       <Route path="about" element={<About/>}/>
        <Route path="package" element={<Package/>}/>
         <Route path="destinations" element={<Destinations/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
