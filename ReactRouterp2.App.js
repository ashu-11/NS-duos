import "./styles.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/users" element={<Users />} />

            <Route path="/" element={Home} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
