import React, { useState } from "react";

import { Body } from "./Body/Body.jsx";
import { Footer } from "./Footer/footer.jsx";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <Body />
      <Footer />
    </main>
  );
};

export default App;
