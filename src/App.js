

import { Routes, Route, } from "react-router-dom";

import NavBar from './NavBar';
import Apropos from './pages/Apropos';
import Taches from './pages/Taches';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
<NavBar/>

<Routes>
  
    <Route path="/" element={<Home/>} />
     <Route path="/Apropos" element={<Apropos/>} />
      <Route path="/Taches" element={<Taches/>} />
      
      </Routes>
      
     
      
    

    </div>
  );
}

export default App;
