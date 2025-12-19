import { Carrossel } from "./carrossel.jsx";

export function Projetos() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-white text-center mt-10">
        Projetos
      </h2>
      <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-6 md:px-20 gap-10">
        <Carrossel />
      </div>
      <h3 className="text-lg leading-relaxed text-white text-center mx-10 mt-10">
        Nestes projetos, pratico diariamente conceitos de HTML, CSS, Tailwind,
        JavaScript e React, criando componentes, interfaces e funcionalidades
        reais. São exercícios estruturados para melhorar minha lógica, domínio
        do DOM, eventos, funções, responsividade e boas práticas de código. Cada
        projeto representa um passo da minha evolução como desenvolvedor
        Front-end e reflete minha busca constante por organização, clareza e
        aprendizado contínuo.
      </h3>
    </div>
  );
}
