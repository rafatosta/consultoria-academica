import Head from "next/head";
import SocialMedia from "../components/SocialMedia";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Consultoria Acadêmica</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <div
          id="inicio"
          className="flex flex-col bg-[url('../public/banner.jpg')] bg-cover bg-center
          text-white"
        >
          <div className="flex flex-col bg-black/50 p-4 sm:p-8 sm:px-24 gap-y-16 h-96">
            {/* Cabeçalho */}
            <div id="header" className="flex flex-row justify-between">
              <div id="logo">
                <p className="text-sm font-bold ">Amandha Queiroz</p>
                <p className="text-sm italic">Consultora acadêmica</p>
              </div>
              <SocialMedia />
            </div>
            {/* Banner inicial */}
            <div className="flex flex-col justify-center items-center gap-y-2 sm:items-start">
              <div className="text-center text-4xl tracking-wide font-extrabold sm:text-6xl">
                Consultoria Acadêmica
              </div>
              <div className="text-center font-semibold sm:text-lg">
                Orientação, revisão, formatação e construção.
              </div>
              <Link
                href="/orcamento"
                className="bg-orange-600 hover:bg-orange-700 font-semibold p-3 rounded-md font-mono uppercase mt-8"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
        <div id="servicos">LISTA DE SERVIÇOS</div>
      </main>
    </>
  );
}
