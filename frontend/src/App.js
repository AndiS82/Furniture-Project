import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BigStuff } from './pages/BigStuff';
import { NotSoBigStuff } from './pages/NotSoBigStuff.js';
import { SmallStuff } from './pages/SmallStuff';
import { Details } from './pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/bigstuff"} element={<BigStuff />} />
          <Route path={"/notsobigstuff"} element={<NotSoBigStuff />} />
          <Route path={"/smallstuff"} element={<SmallStuff />} />
          <Route path={"/details"} element={<Details />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
