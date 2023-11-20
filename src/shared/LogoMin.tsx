import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLightMin from "./LogoSvgLightMin";
import LogoSvgMin from "./LogoSvgMin";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const LogoMin: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      <LogoSvgLightMin />
      <LogoSvgMin />

      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {/* {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )} */}
    </Link>
  );
};

export default LogoMin;
