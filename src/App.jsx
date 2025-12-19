import React, { useState } from "react";

import { Body } from "./Body/Body.jsx";
import { Footer } from "./Footer/footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Body />
      <Footer />
    </div>
  );
};

export default App;
