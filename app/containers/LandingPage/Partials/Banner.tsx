import { Image } from "@nextui-org/react";
import React from "react";
import BannerImage from "../../../assets/icons/banner.svg";

function Banner() {
  return (
    <div className=" w-full h-max-[104px] gap-10 my-8 mx-32">
      <div className="w-full h-full mt-5 ">
        <Image src={BannerImage.src} alt="banner" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Banner;
