import React from "react";
import { Download } from "lucide-react";

export function About() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-white text-center mt-10">
        Pedro Paulo
      </h2>
      <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-6 md:px-20 gap-10">
        <section className="text-white py-20">
          <div className="container text-center mx-auto px-4">
            <h3 className="text-4xl font-semibold mb-4">
              Conhecimento técnico com foco em resultados reais
            </h3>
            <p className="text-lg leading-relaxed">
              Interesso-me por desenvolvimento web, organização, boas práticas e
              evolução constante.
            </p>
          </div>
          <div className="flex justify-evenly mt-10">
            <a
              href="/Pedro_Curriculo.pdf"
              download
              className="flex gap-2 p-2 bg-blue-500 rounded-md"
            >
              <Download /> Curriculo
            </a>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <img
              src="/trabalhando.jpg"
              alt="Foto trabalhando"
              className="mx-auto rounded-md w-full h-56 object-cover drop-shadow-[0_0_35px_rgba(124,58,237,0.5)]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
