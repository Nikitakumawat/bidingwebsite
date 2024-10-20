import dayjs from "dayjs";
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";
import LogoIcon from "../../assets/icons/logo.svg";
import { Divider } from "@nextui-org/react";

const socialIconsMapping = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  tiktok: <TikTokIcon />,
  twitter: <TwitterIcon />,
  github: <YoutubeIcon />,
};

const quickLinks = ["Products", "About us", "Contact us"];
const socialLinks = ["twitter", "facebook", "instagram", "github"];

const Footer = () => {
  const year = dayjs().format("YYYY");

  return (
    <div className="max-container bottom-0">
      <div
        className="full-width-wrapper "
        style={{ background: "#000", color: "#fff" }}
      >
        <footer className="">
          <div className="container py-12 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center">
                <img alt="logo" src={LogoIcon.src} />
                <p>Genix Auctions</p>
              </a>
            </div>
            <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full text-sm">
                <nav className="list-none mb-10">
                  {quickLinks.map((item, id) => (
                    <li key={id} className="mb-2">
                      {item}
                    </li>
                  ))}
                </nav>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full text-sm">
                <h2 className="title-font font-normal tracking-widest text-sm mb-3">
                  Auctions
                </h2>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full text-sm">
                <h2 className="title-font font-normal tracking-widest text-sm mb-3">
                  Biding
                </h2>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-6">
                <span className="inline-flex m-auto mt-2 justify-center">
                  {socialLinks.map((value, index) => (
                    <div key={index} className="m-2">
                      {socialIconsMapping[value]}
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </div>
          <Divider />
          <div className="">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
              <p className="text-sm text-center">
                Copyright © {year} , All rights reserved by Genix
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
