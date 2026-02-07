import { Carrossel } from "./carrossel.jsx";

export function Projetos() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-white text-center mt-10">
        Projetos
      </h2>
      <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-6 md:px-20 gap-10">
        <Carrossel />
      </div>
      <p className="text-lg leading-relaxed text-white text-center mx-10 mt-16">
        Projetos desenvolvidos para praticar lógica, DOM, eventos, componentes e
        organização de código, utilizando HTML, CSS, Tailwind, JavaScript e
        React.
      </p>
    </section>
  );
}
