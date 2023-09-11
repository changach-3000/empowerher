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
import SignUp from "./AuthPages/SignUp";
import PregJourney from "./pages/PregJourney";
import { AuthProvider } from "./context/AuthContext";
import AdminLayout from "./admin/AdminLayout";
import Main from "./admin/Main";
import Gpt from "./pages/Gpt";
import Donations from "./pages/Donations";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Main/> }>
            <Route index element={<Main />}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<LayoutPage/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="resources" element={<Resources />}/>
          <Route path="stories" element={<NextSteps />}/>
          <Route path="hospitals" element={<Hospitals/>}/>
          <Route path="shelters" element={<Shelters/>}/>
          <Route path="counselling" element={<SimpleForm/>}/>
          <Route path="helpline" element={<Helpline/>}/>
          <Route path="about" element={<AboutUs/>}/>
          <Route path="pregnancy" element={<PregJourney />}/>
          <Route path="gpt" element={<Gpt/>}/>
          <Route path= "donate" element={<Donations/>}/>
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
