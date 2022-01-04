import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home, About, Users } from "./Pages";
import "./index.css"

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li className="routes">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
