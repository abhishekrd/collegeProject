
import './App.css';

import Navigation from "./components/Navbar";
import Institution from "./components/Institution";
import Home from './components/Home';
import Upload from './components/Upload';
import { BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
   
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/upload' element={<Upload />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}