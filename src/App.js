
import './App.css';

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