import Title from "../components/Title";
import {
  CodeBracketIcon,
  BookOpenIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Services() {
  return (
    <div>
      <Title title="Descrição dos serviços" />
      <div id="services" className="flex flex-col gap-y-4 p-2">
        {services.map((service) => {
          return (
            <div
              key={service.name}
              className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
            >
              <div className="md:flex flex-row items-center justify-start">
                <div className="p-8">
                  <div className="inline-flex uppercase tracking-wide text-lg text-blue-700 font-bold items-center">
                    <service.icon className="h-8 w-8 mr-4" />
                    {service.name}
                  </div>

                  <div className="mt-2 text-slate-500 text-justify">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const services = [
  {
    name: "Orientação",
    description: (
      <span>
        Acompanhamento próximo e personalizado para a construção do seu
        trabalho. Dicas, direcionamento, sugestões do que escrever e para onde
        caminhar. Torna seu trabalho muito mais fácil! Este serviço{" "}
        <span className="underline">
          inclui também a revisão ortográfica, gramatical e de coesão;
          verificação de plágio e formatação
        </span>{" "}
        nas normas decididas por sua faculdade. A verificação de plágio é feita
        manualmente, com análise de cada parágrafo e alteração, se necessário,
        bem como utilizando um software confiável, sendo entregue relatório ao
        cliente.
      </span>
    ),
    icon: AcademicCapIcon,
  },
  {
    name: "Revisão",
    description: (
      <span>
        Leitura rigorosa do seu texto, com análise de coesão e correção de erros
        gramaticais. Inclui também a formatação nas normas e a verificação de
        plágio.
      </span>
    ),
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Formatação",
    description: (
      <span>
        Colocar nas normas determinadas pela faculdade, ABNT ou Vancouver.
      </span>
    ),
    icon: CodeBracketIcon,
  },
  {
    name: "Construção",
    description: (
      <span>
        <p>Não tem ideia de como escrever ou está sem tempo?</p>
        <p>
          Também há a oferta de construção do seu trabalho, sendo entregue
          pronto, junto ao slide da apresentação.
        </p>
        <p>
          Aqui também se encaixam as categorias de trabalhos acadêmicos,
          resolução de atividades e preparação de apresentações. Atenção as
          observações abaixo:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            O serviço de construção volta-se apenas para áreas teóricas, ou
            seja, apenas revisões de literatura, não entrando aqui pesquisas de
            campo ou de cálculos.
          </li>
          <li>
            O serviço de construção não inclui redação de dissertação e teses.
          </li>
        </ul>
      </span>
    ),
    icon: BookOpenIcon,
  },
];

export default Services;
