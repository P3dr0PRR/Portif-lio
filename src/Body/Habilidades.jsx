export function Habilidades() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-white text-center mt-10">
        Habilidades
      </h2>
      <div className="grid grid-cols-3 gap-8 gap-y-12 mb-4">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="HTML"
            src="/Habilidades/HTML.png"
            className="h-14 w-14"
          ></img>
        </div>

        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="CSS"
            src="/Habilidades/CSS.png"
            className="h-14 w-14"
          ></img>
        </div>

        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="TAILWIND"
            src="/Habilidades/TAILWIND.png"
            className="h-14 w-14"
          ></img>
        </div>

        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="JavaScript"
            src="/Habilidades/JS.png"
            className="h-14 w-14"
          ></img>
        </div>

        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="REACT"
            src="/Habilidades/react.png"
            className="h-14 w-14"
          ></img>
        </div>

        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="BOAS PRÁTICAS"
            src="/Habilidades/BOAS.png"
            className="h-14 w-14 bg-white/80 rounded-md"
          ></img>
        </div>
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            title="TypeScript"
            src="/Habilidades/TS.png"
            className="h-14 w-14"
          ></img>
        </div>
      </div>
      <h3 className="text-lg leading-relaxed text-white text-center mx-10 mt-10">
        Tenho experiência prática com HTML, CSS, Tailwind CSS e JavaScript, e
        venho evoluindo constantemente em React, criando interfaces funcionais,
        organizadas e responsivas. No dia a dia, trabalho com manipulação do
        DOM, eventos, funções e componentes, sempre aplicando boas práticas de
        estruturação de código. Busco evoluir por meio de projetos contínuos,
        onde priorizo organização visual, clareza na escrita do código e atenção
        aos detalhes. Meu foco é melhorar continuamente minha capacidade de
        resolver problemas, aprender novas técnicas e entregar soluções limpas e
        eficientes.
      </h3>
    </div>
  );
}
