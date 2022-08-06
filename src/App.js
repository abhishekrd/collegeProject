
import './App.css';

import Navigation from "./components/Navbar";
import Institution from "./components/Institution";
import Home from './components/Home';

export default function App() {
  return (
    <div className="App">
      <Institution />
      <Navigation />
      <Home />
    </div>
  );
}