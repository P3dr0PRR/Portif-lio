import { About } from "../Body/About.jsx";
import { QuemSou } from "../Body/QuemSou.jsx";
import { Projetos } from "../Body/Projetos.jsx";

export function Body() {
  return (
    <div className="flex flex-col">
      <About />
      <QuemSou />
      <Projetos />
    </div>
  );
}
