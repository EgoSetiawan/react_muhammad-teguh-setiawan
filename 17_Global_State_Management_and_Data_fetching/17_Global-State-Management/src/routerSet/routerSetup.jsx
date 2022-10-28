import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Todo from "../pages/todo/Todo";
import About from "../pages/about/About";
import AboutAuthor from "../pages/about-author/AboutAuthor";
import NotFound from "../pages/notfound/NotFound";

function routerSetup() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routerSetup;
