import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addproject  from "./pages/Addproject";
import Updateproject from './pages/Updateproject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/add" element={<Addproject/>}/>
                <Route path='/update/:id' element={<Updateproject/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
