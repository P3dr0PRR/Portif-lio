import { About } from "../Body/About.jsx";
import { QuemSou } from "../Body/QuemSou.jsx";
import { Projetos } from "../Body/Projetos.jsx";
import { Habilidades } from "../Body/Habilidades.jsx";
import { Contato } from "../Body/Contato.jsx";

export function Body() {
  return (
    <div className="flex flex-col cursor-default">
      <About />
      <QuemSou />
      <Projetos />
      <Habilidades />
      <Contato />
    </div>
  );
}
