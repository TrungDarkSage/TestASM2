import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ExampleContext from "./components/Store/Context";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    // <ExampleContext.Provider value={{ valueInput: "" }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
    // </ExampleContext.Provider>
  );
}

export default App;
