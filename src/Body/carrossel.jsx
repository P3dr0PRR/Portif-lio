import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carrossel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectsObject = [
    {
      nome: "Gerenciador de tarefas",
      image: "/Projetos/Gerenciador_de_Tarefas.png",
      link: "https://gerenciador-de-tarefas-five-khaki.vercel.app/",
    },
    {
      nome: "Mais conteúdos no meu GitHub",
      image: "/Projetos/DispGit.png",
      link: "https://github.com/P3dr0PRR",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projectsObject.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + projectsObject.length) % projectsObject.length
    );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full max-w-2xl bg-gray-900 rounded-xl overflow-hidden shadow-lg">
        <div className="relative aspect-video w-full bg-black">
          <img
            src={projectsObject[currentSlide].image}
            alt={projectsObject[currentSlide].nome}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <p className="text-white text-lg font-semibold">
            {projectsObject[currentSlide].nome}
          </p>
          <a
            href={projectsObject[currentSlide].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Conferir
          </a>
        </div>

        <div className="flex items-center justify-between px-4 pb-4">
          <button
            onClick={prevSlide}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {projectsObject.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
