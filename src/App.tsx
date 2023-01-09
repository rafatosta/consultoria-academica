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
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <Navbar />
      <RoutesBase />
      <Footer />
    </div>
  );
}

export default App;
