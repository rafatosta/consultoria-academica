import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contatos" element={<Contacts />} />
      </Routes>

    </div>
  );
}

export default App;
