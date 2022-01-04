import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
