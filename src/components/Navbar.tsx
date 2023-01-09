import { MenuButton } from "./MenuButton";
import { useLocation, Link } from "react-router-dom";
import { routesNavigation } from "../routes/RoutesBase";

export function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-row gap-x-8 justify-between w-full p-4">
      <Link to="/" className="font-bold">
        Consultoria Acadêmica{" "}
      </Link>
      <div className="sm:flex flex-1 hidden justify-start flex-row gap-x-8  ">
        {routesNavigation.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.path}
              className={
                location.pathname == item.path ? "text-blue-700 font-bold underline" : "text-black"
              }
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="sm:hidden inline-block">
        <MenuButton />
      </div>
    </div>
  );
}
