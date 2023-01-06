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
      sm:flex-row sm:items-start sm:justify-center w-full"
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
          className="w-[32rem] h-60 md:w-[42rem] md:h-72 "
          src="src/assets/logo.png"
          alt="Image profile"
        />
      </div>
      <div id="services">
        <Title title="Serviços" />
        <div>Serviço 1</div>
      </div>
    </div>
  );
}

export default Home;
