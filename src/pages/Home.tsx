function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center py-20
      sm:flex-row sm:items-start sm:justify-around px-4 w-full h-fit
      /*bg-gradient-to-r  from-green-400/30 to-blue-100/20 */ "
    >
      <div className="flex flex-col items-center justify-center sm:items-start gap-y-6 h-72">
        {/* <div className="text-3xl sm:text-5xl">Consultoria Acadêmica</div> */}
        <div className="flex flex-col items-center sm:items-start sm:justify-start text-2xl lg:text-4xl font-serif font-bold">
          <p>O TCC não está fluindo?</p>
          <p>Nada de orientador?</p>
          <p>Sem Tempo?</p>
        </div>
        <div className="text-xl sm:text-2xl font-sans">
          A <span className="font-bold"> Consultoria Acadêmica</span> pode ser a
          solução!
        </div>
      </div>
      <img
        className="w-[32rem] h-60 md:w-[42rem] md:h-72 "
        src="src/assets/logo.png"
        alt="Image profile"
      />
    </div>
  );
}

export default Home;
