import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RoutesBase } from "./routes/RoutesBase";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <Navbar />
      <RoutesBase />
      <Footer />
    </div>
  );
}

export default App;
