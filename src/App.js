import "./styles/main.css";
import Home from "./Scenes/Home";
import Footer from "./Comps/Footer/Footer";
import Menu from "./Scenes/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <main className="main">
    <BrowserRouter>
        <Routes>
            <Route path="/Coffeehouse" element = {<Home />} /> 
            <Route path="/Coffeehouse/Menu" element = {<Menu />} /> 
        </Routes>
        <Footer />
    </BrowserRouter>

    </main>
  );
}

export default App;
