import {
  CodeBracketIcon,
  BookOpenIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Orientação",
    summary: "Acompanhamento próximo e personalizado",
    icon: AcademicCapIcon,
    description: () => {
      return (
        <div className="flex flex-col gap-y-2">
          <p>
            Acompanhamento próximo e personalizado para a construção do seu
            trabalho.
          </p>
          <p>
            Dicas, direcionamento, sugestões do que escrever e para onde
            caminhar. Torna seu trabalho muito mais fácil! Este serviço{" "}
            <span className="underline">
              inclui também a revisão ortográfica, gramatical e de coesão;
              verificação de plágio e formatação
            </span>{" "}
            nas normas decididas por sua faculdade.
          </p>
          <p>
            A verificação de plágio é feita manualmente, com análise de cada
            parágrafo e alteração, se necessário, bem como utilizando um
            software confiável, sendo entregue relatório ao cliente.
          </p>
        </div>
      );
    },
  },
  {
    name: "Formatação",
    summary: "Formatação seguindo as normas",
    icon: CodeBracketIcon,
    description: () => {
      return (
        <p>
          Colocar nas normas determinadas pela faculdade, ABNT ou Vancouver.
        </p>
      );
    },
  },
  {
    name: "Revisão",
    summary: "Leitura rigorosa do seu texto",
    icon: MagnifyingGlassIcon,
    description: () => {
      return (
        <p>
          Leitura rigorosa do seu texto, com análise de coesão e correção de
          erros gramaticais. Inclui também a formatação nas normas e a
          verificação de plágio.
        </p>
      );
    },
  },
  {
    name: "Construção",
    summary: "Construção da redação de dissertação e teses",
    icon: BookOpenIcon,
    description: () => {
      return (
        <div className="flex flex-col gap-y-2">
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
              seja, apenas revisões de literatura, não entrando aqui pesquisas
              de campo ou de cálculos.
            </li>
            <li>
              O serviço de construção não inclui redação de dissertação e teses.
            </li>
          </ul>
        </div>
      );
    },
  },
];

export default services;
