import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile"
import ErrorPage from './Pages/ErrorPage';
import NestedPages from './Pages/NestedPages'

import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/nested">Nested Pages</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/nested/*" element={<NestedPages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
