import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" exact element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
