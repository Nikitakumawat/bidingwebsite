"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import logo from "../../assets/icons/logo.svg";
import { usePathname } from "next/navigation";
import { ChevronDown, SolidChevron } from "./icons";
import LanguageIcon from "../../assets/icons/language.svg";

function Header() {
  const path = usePathname();
  const isLoginPage = path.includes("login") || path.includes("signup-success");

  return (
    <Navbar className="flex bg-navbar-color py-4 px-32" maxWidth="full">
      <Link href="/">
        <NavbarBrand>
          <img src={logo.src} alt="logo" />
          {/* <AcmeLogo /> */}
          <p className="font-bold text-3xl">Genix Auctions</p>
        </NavbarBrand>
      </Link>
      {!isLoginPage && (
        <>
          <NavbarContent className="hidden sm:flex gap-8" justify="end">
            <Dropdown>
              <NavbarItem isActive>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                    endContent={
                      <ChevronDown
                        size={16}
                        fill={"#000"}
                        height={16}
                        width={16}
                      />
                    }
                    radius="sm"
                    variant="light"
                  >
                    Auctions
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              ></DropdownMenu>
            </Dropdown>

            <NavbarItem>
              <Link href="#" aria-current="page">
                Biding
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                About us
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                    startContent={
                      <img
                        src={LanguageIcon.src}
                        alt="language"
                        sizes="24"
                        height={24}
                        width={24}
                      />
                    }
                    endContent={
                      <SolidChevron
                        size={16}
                        fill={"#000"}
                        height={16}
                        width={16}
                      />
                    }
                    radius="sm"
                    variant="light"
                  >
                    English
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                >
                  Autoscaling
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem
              className="hidden lg:flex font-medium text-base gap-0 items-center"
              style={{ color: "#1D4ED8" }}
            >
              <Link href="/login">Login</Link>
              <Button
                as={Link}
                color="primary"
                href="/signup"
                variant="flat"
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
                }}
                className="rounded-none ml-3"
              >
                Get Started
              </Button>
            </NavbarItem>
            <NavbarItem className="gap-0"></NavbarItem>
          </NavbarContent>
        </>
      )}
    </Navbar>
  );
}

export default Header;
