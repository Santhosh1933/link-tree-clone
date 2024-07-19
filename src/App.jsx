import React from "react";
import Header from "./components/ui/custom/Header";
import Hero from "./components/ui/custom/Hero";
import { Features } from "./components/ui/custom/Home/Features";

export const App = () => {
  return (
    <div className="grid gap-12">
      <Header />
      <div/>
      <Hero />
      <Features />
    </div>
  );
};
