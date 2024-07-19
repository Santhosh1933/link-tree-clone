import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex  items-center flex-col mt-[5vh] lg:mt-[10vh] container  gap-6">
      <h1 className="font-extrabold text-3xl sm:text-5xl  text-center ">
        <span className="text-primary">Secure Your Link</span> Before It's Taken!
      </h1>
      <p className="text-xl text-center text-gray-600 font-semibold">
      Discover the World, One Link at a Time
      </p>
      <Link to={"/"}>
        <Button className="gap-2">
          {" "}
          Create a Link <Link2 />{" "}
        </Button>
      </Link>
      <div className="w-full">
        <img src="./hero.svg" alt="" className="mt-12 lg:w-2/4 mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
