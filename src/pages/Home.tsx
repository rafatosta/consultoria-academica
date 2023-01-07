import Title from "../components/Title";

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center
    w-full sm:py-8 gap-y-8 sm:gap-y-14 px-4"
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
          <div className="text-xl sm:text-2xl font-sans">
            A <span className="font-bold"> Consultoria Acadêmica</span> pode ser
            a solução!
          </div>
        </div>
        <img
          className="w-[20rem] h-60 md:w-[24rem] md:h-72 "
          src="src/assets/logo.png"
          alt="Image profile"
        />
      </div>
      <div id="services">
        <Title title="Serviços" />
        <div>Serviço 1</div>
      </div>

      <div id="deadlines">
        <Title title="Prazos de entrega e a Taxa de urgência" />
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
