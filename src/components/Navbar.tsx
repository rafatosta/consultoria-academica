import { MenuButton } from "./MenuButton";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

export const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contatos", href: "/contatos" },
];

export function Navbar() {
  const location = useLocation();
  
  return (
    <div className="flex flex-row gap-x-8 justify-between w-full p-4">
      <Link to="/" className="font-bold">
        Consultoria Acadêmica{" "}
      </Link>
      <div className="sm:flex flex-1 hidden justify-start flex-row gap-x-8  ">
        {navigation.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.href}
              className={
                location.pathname == item.href ? "text-blue-500" : "text-black"
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
