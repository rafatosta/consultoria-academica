import Head from "next/head";
import SocialMedia from "../components/SocialMedia";
import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import { formOrcamentoURL, whatsappURL } from "../data/user";
import services from "../data/services";
import { Service } from "../components/Service";

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
          className="flex flex-col bg-[url('../public/banner.png')] bg-cover bg-center
          text-white"
        >
          <div className="flex flex-col bg-black/50 p-4 sm:p-8 sm:px-24 gap-y-16 h-[26rem] sm:h-[40rem]">
            {/* Cabeçalho */}
            <div id="header" className="flex flex-row justify-between">
              <div id="logo">
                <p className="text-sm font-bold ">Amandha Queiroz</p>
                <p className="text-sm italic">Consultora acadêmica</p>
              </div>
              <SocialMedia />
            </div>
            {/* Banner inicial */}
            <div className="flex flex-col justify-center items-center gap-y-2 sm:items-start sm:h-full">
              <div className="text-center text-4xl tracking-wide font-extrabold sm:text-6xl sm:text-start">
                Consultoria Acadêmica
              </div>
              <div className="text-center font-semibold sm:text-lg">
                Orientação, revisão, formatação e construção.
              </div>
              <Link
                href={formOrcamentoURL}
                target="_blank"
                className="bg-orange-600 hover:bg-orange-700 text-sm sm:text-md font-semibold p-3 rounded-md font-mono uppercase mt-8"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
        <div
          id="sobre"
          className="bg-white flex flex-col justify-center items-center p-16 w-full"
        >
          <div className="flex flex-col justify-start items-center gap-y-8 sm:flex-row sm:justify-center sm:gap-x-12 ">
            <Image
              alt="Avatar logo"
              src={avatar}
              className="h-52 w-52 sm:w-72 sm:h-72"
            />
            <div className="flex flex-col justify-start items-center sm:items-start">
              <p className="font-sans text-2xl sm:text-4xl font-extrabold">
                Amandha Queiroz
              </p>
              <p className="uppercase font-mono text-sm text-orange-700">
                Consultora acadêmica
              </p>
              <div className="flex flex-col pt-4 gap-y-8">
                <div className="flex flex-col items-center sm:items-start sm:justify-start text-2xl lg:text-3xl font-serif  gap-y-1">
                  <p>O TCC não está fluindo?</p>
                  <p>Nada de orientador?</p>
                  <p>Sem Tempo?</p>
                </div>
                <div className="text-xl font-sans text-center sm:text-2xl sm:text-start md:text-start">
                  A <span className="font-bold"> Consultoria Acadêmica</span>{" "}
                  pode ser a solução!
                </div>
              </div>
              <Link
                href={whatsappURL}
                target="_blank"
                className="bg-orange-600 hover:bg-orange-700 text-sm sm:text-md font-semibold text-white p-3 rounded-md font-mono uppercase mt-8
            drop-shadow-xl"
              >
                Enviar mensagem
              </Link>
            </div>
          </div>
        </div>
        <div
          id="servicos"
          className="py-16 px-4 sm:px-24  bg-[url('../public/banner-white.jpg')] bg-cover bg-center "
        >
          <div className="flex flex-col justify-center items-start gap-12 sm:flex-row">
            {services.map((s) => {
              return (
                <Service
                  key={s.name}
                  name={s.name}
                  summary={s.summary}
                  description={s.description}
                  icon={s.icon}
                />
              );
            })}
          </div>
        </div>
        <div
          id="deadlines"
          className=" flex flex-col justify-center items-center p-8 py-16 gap-y-4"
        >
          <div>
            <p className="font-sans text-xl sm:text-2xl font-extrabold ">
              {" "}
              Solicitando meus serviços você terá:
            </p>
            <div className="flex flex-col justify-center gap-y-8 sm:flex-row sm:justify-start sm:gap-x-8 pt-8">
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
                  Construção de trabalhos
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Até 3 páginas: 3 dias.</li>
                  <li>Até 5 páginas: 4 dias.</li>
                  <li>Mais de 5 páginas: 5 dias.</li>
                  <li>Taxa de urgência: 20% do valor total.</li>
                </ul>
              </div>
              <div>
                <p className="inline-flex uppercase tracking-wide text-lg text-blue-700 font-bold items-center">
                  Formas de pagamento
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Pix</li>
                  <li>Cartão de crédito (via PicPay)</li>
                  <li>Transferência ou depósito bancário</li>
                </ul>
              </div>
            </div>
          </div>
          <Link
            href={formOrcamentoURL}
            target="_blank"
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-md font-semibold  p-3 rounded-md font-mono uppercase mt-8 drop-shadow-xl"
          >
            Solicite seu orçamento
          </Link>
        </div>
        <div
          id="footer"
          className="flex flex-col bg-black/70 text-white justify-center items-center"
        >
          <div className="inline-flex justify-around items-center w-full p-4">
            <div>
              <p className="text-lg font-bold ">Amandha Queiroz</p>
              <p className="text-sm font-mono text-gray-200">
                Consultora acadêmica
              </p>
            </div>
            <SocialMedia />
          </div>
          <div className="bg-black w-full text-sm text-end p-1 px-8">
            <span className="text-white font-mono">desenvolvido por:</span>{" "}
            <a
              href="https://github.com/rafatosta"
              target="_blank"
              className="text-white font-bold font-mono"
            >
              Rafael Tosta
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
