import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage/>}>
          <Route index element={<LandingPage/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
