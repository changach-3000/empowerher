import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import LandingPage from "./pages/LandingPage";
import Resources from "./pages/Resources";
import NextSteps from "./pages/NextSteps";
import Hospitals from "./pages/Hospitals";
import Shelters from "./pages/Shelters";
import {SimpleForm} from "./pages/Counselling";
import Helpline from "./pages/Helpline";
import AboutUs from "./pages/AboutUs";
import Login from "./AuthPages/Login"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<LayoutPage/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="resources" element={<Resources />}/>
          <Route path="stories" element={<NextSteps />}/>
          <Route path="hospitals" element={<Hospitals/>}/>
          <Route path="shelters" element={<Shelters/>}/>
          <Route path="counselling" element={<SimpleForm/>}/>
          <Route path="helpline" element={<Helpline/>}/>
          <Route path="about" element={<AboutUs/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
