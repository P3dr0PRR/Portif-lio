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
          <div
            className="w-20 h-20 rounded-md ring-2 ring-orange-400/50 
              bg-[url('Habilidades/SkillsBg.png')] 
                  bg-cover bg-center 
                  flex items-center justify-center"
          >
            <div className=" w-full h-full flex items-center justify-center rounded-md">
              <img
                loading="eager"
                decoding="async"
                title="HTML"
                src="Habilidades/HTML.png"
                alt="HTML"
                className=" pt-3"
              />
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div
            className="w-20 h-20 rounded-md ring-2 ring-blue-400/50 
              bg-[url('Habilidades/SkillsBg.png')] 
                  bg-cover bg-center 
                  flex items-center justify-center"
          >
            <div className=" w-full h-full flex items-center justify-center rounded-md">
              <img
                loading="eager"
                decoding="async"
                title="CSS"
                src="Habilidades/CSS.png"
                alt="CSS"
                className=" pt-2"
              />
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div
            className="w-20 h-20 rounded-md ring-2 ring-sky-400/50 
              bg-[url('Habilidades/SkillsBg.png')] 
                  bg-cover bg-center 
                  flex items-center justify-center"
          >
            <div className=" w-full h-full flex items-center justify-center rounded-md">
              <img
                loading="eager"
                decoding="async"
                title="Tailwind CSS"
                src="Habilidades/TAILWIND.png"
                alt="Tailwind CSS"
              />
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div
            className="w-20 h-20 rounded-md ring-2 ring-yellow-200/50 
              bg-[url('Habilidades/SkillsBg.png')] 
                  bg-cover bg-center 
                  flex items-center justify-center"
          >
            <div className=" w-full h-full flex items-center justify-center rounded-md">
              <img
                loading="eager"
                decoding="async"
                title="JavaScript"
                src="Habilidades/JS.png"
                alt="JavaScript"
              />
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div className="rounded-md ring-2 p-2 ring-sky-500/50 bg-[url('Habilidades/SkillsBg.png')] bg-cover bg-center">
            <img
              loading="eager"
              decoding="async"
              title="REACT"
              src="Habilidades/react.png"
              alt="REACT"
              className="h-14 w-14"
            />
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div className="rounded-md ring-2 p-2 ring-gray-100/50 bg-[url('Habilidades/SkillsBg.png')] bg-cover bg-center">
            <img
              loading="eager"
              decoding="async"
              title="BOAS PRÁTICAS"
              src="Habilidades/BOAS.png"
              alt="BOAS PRÁTICAS"
              className="h-14 w-14 bg-white/80 rounded-md"
            />
          </div>
        </li>
        <li className="flex flex-col items-center">
          <div className="rounded-md ring-2 p-2 ring-blue-500/50 bg-[url('Habilidades/SkillsBg.png')] bg-cover bg-center">
            <img
              loading="eager"
              decoding="async"
              title="TypeScript"
              src="Habilidades/TS.png"
              alt="TypeScript"
              className="h-14 w-14"
            />
          </div>
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
