import { About } from "../Body/About.jsx";
import { QuemSou } from "../Body/QuemSou.jsx";

export function Body() {
  return (
    <div className="flex flex-col">
      <About />
      <QuemSou />
    </div>
  );
}
