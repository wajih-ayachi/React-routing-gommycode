

import { Routes, Route, } from "react-router-dom";

import NavBar from './NavBar';
import Comments from './pages/Comments';
import Users from './pages/Users';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
<NavBar/>

<Routes>
  
    <Route path="/" element={<Home/>} />
     <Route path="/Comments" element={<Comments/>} />
      <Route path="/Users" element={<Users/>} />
      
      </Routes>
      
     
      
    

    </div>
  );
}

export default App;
