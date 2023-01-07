import { Navbar } from "./components/Navbar";
import { RoutesBase } from "./routes/RoutesBase";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <Navbar />
      <RoutesBase />
    </div>
  );
}

export default App;
