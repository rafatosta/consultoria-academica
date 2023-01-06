import {MenuButton} from "./MenuButton";

function Navbar() {
  return (
    <div className="absolute flex flex-row gap-x-8 justify-between w-full p-4">
      <div className="font-bold">Consultoria Acadêmica</div>
      <div className="sm:flex flex-1 hidden justify-start flex-row gap-x-8  ">
        <button>Serviços</button>
        <button>Contatos</button>
      </div>
      <div className="sm:hidden inline-block">
        <MenuButton />
      </div>
    </div>
  );
}

export default Navbar;
