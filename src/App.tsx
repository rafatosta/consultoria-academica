import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RoutesBase } from "./routes/RoutesBase";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="w-full h-full bg-cover bg-center bg-[url('../WaveLine.svg')]">
      <div
        className="flex flex-col w-full h-screen items-center justify-start backdrop-blur-sm bg-white/30
     "
      >
        <Navbar />
        <RoutesBase />
        <Footer />
      </div>
    </div>
  );
}

export default App;
