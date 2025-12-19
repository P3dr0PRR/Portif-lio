import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export function Contato() {
  return (
    <div className="flex flex-col justify-between items-center  text-white">
      <h1 className="text-4xl font-bold p-6   text-center">Contato</h1>
      <h3 className="text-lg leading-relaxed text-white text-center mx-10 mt-10">
        Você pode falar comigo pelos links abaixo sempre que quiser trocar uma
        ideia sobre desenvolvimento, compartilhar oportunidades ou iniciar uma
        colaboração. Estou disponível no GitHub, LinkedIn, por email e também
        por telefone. Será um prazer conversar com você.
      </h3>

      <div className="flex flex-col my-12 w-full text-white p-1 gap-4">
        <div className="flex justify-between px-4">
          <div className="flex">
            <p className="mr-1 font-semibold">Email: </p>
            <p> pedropaulo@interlinksistemas.com.br</p>
          </div>

          <div className="flex">
            <p className="mr-1 font-semibold">Celular: </p>
            <p> (34)99796-7512</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-1">
          <a
            href="https://github.com/P3dr0PRR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-white w-6 h-6 hover:text-gray-400 cursor-pointer hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/pedrocadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-white w-6 h-6 hover:text-gray-400 cursor-pointer hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}
