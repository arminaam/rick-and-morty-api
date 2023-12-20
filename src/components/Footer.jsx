import React from "react";
import dog_img from "../assets/imgs/dog.png"

function Footer() {
  return (
    <div className="text-white flex justify-center flex-col gap-2 items-center p-8">
      <span>Coded by armin</span>
      <span>design by kiki(kiana)</span>
      <img className="w-[4rem]" src={dog_img} alt="dog_img" />
    </div>
  );
}

export default Footer;
