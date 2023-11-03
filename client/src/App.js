import './App.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addproject  from "./pages/Addproject";
import Updateproject from './pages/Updateproject';
import Closedproject from './pages/ClosedProject';
import dashboard from './assets/dashboard.png';
import projects from './assets/projects.png';
import settings from './assets/settings.png';

function App() {
  return (
    <div className="main">
        <BrowserRouter>
        <sidebar className="sidebar">
          <h1>HACKATHON</h1>
          <Link to="/"><img src={dashboard} alt="dashboard icon" /></Link>      
          <Link to="/closedprojects"><img src={projects} alt="projects icon" /></Link>
          <img src={settings} alt="settings" />
        </sidebar>

        <div className="homepage">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/add" element={<Addproject/>}/>
                <Route path='/update/:id' element={<Updateproject/>}/>
                <Route path='/closedprojects' element={<Closedproject/>}/>
            </Routes>
        </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
