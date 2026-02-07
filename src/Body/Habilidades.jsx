export function Habilidades() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-white text-center mt-10">
        Habilidades
      </h2>
      <ul
        aria-label="Tecnologias que sei"
        className="grid grid-cols-3 gap-8 gap-y-12 mb-4"
      >
        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="HTML"
            src="/Habilidades/HTML.png"
            alt="HTML"
            className="h-14 w-14"
          />
        </li>

        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="CSS"
            src="/Habilidades/CSS.png"
            alt="CSS"
            className="h-14 w-14"
          />
        </li>

        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="TAILWIND"
            src="/Habilidades/TAILWIND.png"
            alt="TAILWIND"
            className="h-14 w-14"
          />
        </li>

        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="JavaScript"
            src="/Habilidades/JS.png"
            alt="JavaScript"
            className="h-14 w-14"
          />
        </li>

        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="REACT"
            src="/Habilidades/react.png"
            alt="REACT"
            className="h-14 w-14"
          />
        </li>

        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="BOAS PRÁTICAS"
            src="/Habilidades/BOAS.png"
            alt="BOAS PRÁTICAS"
            className="h-14 w-14 bg-white/80 rounded-md"
          />
        </li>
        <li className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="TypeScript"
            src="/Habilidades/TS.png"
            alt="TypeScript"
            className="h-14 w-14"
          />
        </li>
      </ul>
      <p className="text-lg leading-relaxed text-white text-center mx-10 mt-10">
        Tenho experiência prática com HTML, CSS, Tailwind CSS e JavaScript, e
        venho evoluindo constantemente em React, criando interfaces funcionais,
        organizadas e responsivas. No dia a dia, trabalho com manipulação do
        DOM, eventos, funções e componentes, sempre aplicando boas práticas de
        estruturação de código. Busco evoluir por meio de projetos contínuos,
        onde priorizo organização visual, clareza na escrita do código e atenção
        aos detalhes. Meu foco é melhorar continuamente minha capacidade de
        resolver problemas, aprender novas técnicas e entregar soluções limpas e
        eficientes.
      </p>
    </section>
  );
}
