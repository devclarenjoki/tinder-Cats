import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About} from "./Pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;