

import './App.css';
import Navbar from "./Components/navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Read from './Components/read';
import Update from './Components/update';
import Create from './Components/create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" Component={Create}></Route>
      <Route path="/all" Component={Read}></Route>
      <Route path="/:id" Component={Update}></Route>

      </Routes>
      
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
