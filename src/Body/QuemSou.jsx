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
            Me chamo Pedro Paulo e sou desenvolvedor Front-end em formação, com
            foco em JavaScript, React e criação de interfaces modernas usando
            Tailwind CSS. Estudo Análise e Desenvolvimento de Sistemas e sigo
            uma rotina constante de prática, sempre buscando evoluir tanto em
            lógica quanto em qualidade de código. Tenho o hábito de organizar
            meus estudos de forma estruturada, criando listas de exercícios,
            revisando conceitos e aplicando tudo em projetos reais. Isso me
            ajudou a desenvolver uma base sólida em funções, DOM, eventos,
            responsividade e boas práticas de desenvolvimento. Gosto de entender
            cada etapa do processo e encontrar soluções limpas e eficientes. Sou
            disciplinado, curioso e gosto de trabalhar de forma organizada.
            Acredito que um bom desenvolvedor precisa unir clareza, consistência
            e atenção aos detalhes — valores que levo comigo em cada projeto.
            Meu objetivo é conquistar meu primeiro cargo como Desenvolvedor
            Front-end, continuar aprimorando minhas habilidades e construir uma
            carreira sólida. Vejo a tecnologia como uma área de crescimento
            constante, e estou sempre em busca da minha melhor versão como
            profissional.
          </p>
        </section>
      </div>
    </div>
  );
}
