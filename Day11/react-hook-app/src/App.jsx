import React from "react";
import CounterApp from "./components/CounterApp";
import ImageApp from "./components/ImageApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="CounterApp" element={<CounterApp />} />
            <Route path="ImageApp" element={<ImageApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <ImageApp />
    //   <CounterApp />
    // </div>
  );
}

export default App;
