import Title from "../components/Title";
import { services } from "../pages/Services";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center
    w-full sm:py-8 gap-y-8 sm:gap-y-14 px-4 my-4 mb-12"
    >
      <div
        id="header"
        className="flex flex-col justify-center items-center
      sm:flex-row sm:items-start sm:justify-evenly w-full"
      >
        <div className="flex flex-col items-center justify-center sm:items-start gap-y-9 h-72 ">
          <div className="flex flex-col items-center sm:items-start sm:justify-start text-2xl lg:text-4xl font-serif font-bold gap-y-2">
            <p>O TCC não está fluindo?</p>
            <p>Nada de orientador?</p>
            <p>Sem Tempo?</p>
          </div>
          <div className="text-xl sm:text-2xl font-sans text-center">
            A <span className="font-bold"> Consultoria Acadêmica</span> pode ser
            a solução!
          </div>
          {/* <Link
            to="/orcamento"
            className="border rounded-full px-8 py-2 border-blue-500 shadow-md hover:scale-110 font-semibold"
          >
            Solicite um orçamento aqui...
          </Link> */}
          <Link
            to="/orcamento"
            className="inline-flex items-center text-blue-500 hover:scale-110 font-extrabold tracking-wide text-lg "
          >
            Solicite um orçamento <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <img
          className="w-[20rem] h-60 mt-8 md:mt-0 md:w-[24rem] md:h-72 "
          src="src/assets/logo.png"
          alt="Image profile"
        />
      </div>
      <div id="services" className="flex flex-col items-center">
        <Title title="Serviços" />
        <div className="flex flex-col justify-center items-start gap-y-4 sm:flex-row sm:gap-x-4">
          {services.map((service) => {
            return (
              <div
                key={service.name}
                className="flex flex-row sm:flex-col sm:justify-center items-center sm:gap-y-4"
              >
                <service.icon className="h-20 w-20 p-5 bg-blue-700 text-white rounded-full shadow-lg" />
                <div className="flex flex-col items-start justify-center pl-4 sm:items-center">
                  <div className="uppercase tracking-wide text-lg text-blue-700 font-bold ">
                    {service.name}
                  </div>
                  <div className="sm:text-center">{service.summary}</div>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          to="/servicos"
          className="mt-12 border rounded-full px-8 py-2 border-blue-500 shadow-md hover:scale-110 font-bold"
        >
          Saiba mais...
        </Link>
      </div>

      <div id="deadlines">
        <Title title="Prazos de entrega" />
        <div className="flex flex-col justify-center gap-y-8 sm:flex-row sm:justify-start sm:gap-x-8">
          <div>
            <p className="inline-flex uppercase tracking-wide text-lg text-blue-700 font-bold items-center">
              Revisão e formatação{" "}
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Prazo de entrega: 5 dias;</li>
              <li>Taxa de urgência: 10% sobre o valor final.</li>
            </ul>
          </div>
          <div>
            <p className="inline-flex uppercase tracking-wide text-lg text-blue-700 font-bold items-center">
              Construção de trabalhos acadêmicos
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Até 3 páginas: 3 dias.</li>
              <li>Até 5 páginas: 4 dias.</li>
              <li>Mais de 5 páginas: 5 dias.</li>
              <li>Taxa de urgência: 20% do valor total.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
