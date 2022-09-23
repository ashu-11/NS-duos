import "./styles.css";
import About from "./components/About";
import Home from "./components/Home";
import Notfound from "./components/NotFound";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  const users = [
    { id: 1, name: "Ashu1" },
    { id: 2, name: "Ashu2" },
    { id: 3, name: "Ashu3" },
    { id: 4, name: "Ashu4" }
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users user={users} />} />
        {/* dynamic Route */}
        <Route path="/users/:userId" element={<UserDetails user={users} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
