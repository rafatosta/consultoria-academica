import Home from "../pages/Home";
import Services from "../pages/Services";
import Contacts from "../pages/Contacts";
import Payments from "../pages/Payments";
import { Route, Routes } from "react-router-dom";

export const routesNavigation = [
  { name: "Início", path: "/", component: <Home /> },
  { name: "Serviços", path: "/servicos", component: <Services /> },
  { name: "Pagamentos", path: "/pagamentos", component: <Payments /> },
  { name: "Orçamento", path: "/orcamento", component: <Contacts /> },
];

export function RoutesBase() {
  return (
    <Routes>
      {routesNavigation.map((route) => {
        return <Route key={route.path} path={route.path} element={route.component} />;
      })}
    </Routes>
  );
}
