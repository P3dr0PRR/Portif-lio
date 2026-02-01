export function QuemSou() {
  return (
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-6">Quem Sou</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-6 md:px-20 py-10 gap-10">
        <section className="w-full md:w-auto">
          <img
            loading="lazy"
            decoding="async"
            src="/Fotos/Pedro.jpg"
            alt="Foto Pedro Paulo"
            className="
              mx-auto rounded-md
              w-full md:w-[320px]
              h-56 md:h-[320px]
              object-cover
              shrink-0
              drop-shadow-[0_0_35px_rgba(124,58,237,0.5)]
            "
          />
        </section>

        <section className="flex-1 text-center items-center justify-center my-auto text-md leading-relaxed">
          <p>
            Sou o Pedro Paulo, desenvolvedor Front-end em formação, com foco em
            JavaScript, React, TypeScript e Tailwind CSS. Gosto de trabalhar com
            interfaces simples, organizadas e que realmente funcionem bem no dia
            a dia. Atualmente curso Análise e Desenvolvimento de Sistemas, com
            conclusão prevista para 2026, e também Sistemas de Informação, com
            formação até 2028. Levo os estudos a sério e mantenho uma rotina
            constante de prática, sempre aplicando o que aprendo em projetos
            reais. No meu dia a dia, trabalho bastante com lógica, DOM, eventos,
            componentes, responsividade e organização de código. Tenho o hábito
            de revisar conceitos, melhorar projetos aos poucos e buscar soluções
            mais claras e eficientes. Tenho inglês fluente, utilizo o idioma com
            frequência para estudar, ler documentação e consumir conteúdo
            técnico. Pretendo realizar o TOEIC em 2026 e o CELPIP em 2028, como
            parte do meu planejamento profissional. Hoje, meu objetivo é
            conquistar minha primeira oportunidade como desenvolvedor Front-end,
            ganhar experiência prática em ambiente profissional e continuar
            evoluindo tanto tecnicamente quanto como pessoa.
          </p>
        </section>
      </div>
    </div>
  );
}
