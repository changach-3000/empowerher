import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import LandingPage from "./pages/LandingPage";
import Resources from "./pages/Resources";
import NextSteps from "./pages/NextSteps";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="resources" element={<Resources />}/>
          <Route path="stories" element={<NextSteps />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
