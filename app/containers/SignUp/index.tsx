"use client";
import React, { useState } from "react";
import signup from "../../assets/icons/signup.svg";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../Login/Icons";
import GoogleIcon from "../../assets/icons/googleLogo.svg";
import AppleIcon from "../../assets/icons/appleLogo.svg";
import FacebookIcon from "../../assets/icons/facebookLogo.svg";
import Link from "next/link";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col md:flex-row  items-center  full-width-wrapper gap-10 mt-32">
      <div className="flex justify-between">
        <div className="w-[440px]">
          <p className="font-bold text-[22px]">Sign up</p>
          <p className="text-sm font-normal mt-2" style={{ color: "#64748B" }}>
          New bidders, as soon as you have submitted your information you will be eligible to bid in the auction.
          </p>

          <div className="mt-6">
          <Input
              key={"email"}
              type="text"
              label="First Name"
              labelPlacement={"outside"}
              placeholder="First Name"
              variant="bordered"
              radius={"sm"}
            />
             <Input
              key={"email"}
              type="text"
              label="lastName"
              labelPlacement={"outside"}
              placeholder="Last Name"
              variant="bordered"
              radius={"sm"}
              className="mt-3"
            />
            <Input
              key={"email"}
              type="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder="Enter your email"
              variant="bordered"
              radius={"sm"}
              className="mt-3"
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              labelPlacement={"outside"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="mt-3"
            />
            <Checkbox defaultSelected size="sm" className="mt-5">
            Receive outbid emails
            </Checkbox>
          </div>
          <Button
            as={Link}
            href="/signup-success"
            style={{
              color: "#fff",
              background:
                "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
            }}
            className="rounded-none mt-5"
            fullWidth
          >
            Submit
          </Button>
          <div>
            <hr />
            <p className="text-center mt-5" style={{ border: "centerALign" }}>
              or sign up with
            </p>
          </div>
          <div className="flex w-full mt-5 gap-1">
            <Button size="md" variant="bordered" radius="sm" fullWidth>
              <img src={GoogleIcon.src} />
              Google
            </Button>
            <Button size="md" variant="bordered" radius="sm" fullWidth>
              <img src={AppleIcon.src} />
              Apple
            </Button>
            <Button size="md" variant="bordered" radius="sm" fullWidth>
              <img src={FacebookIcon.src} />
              Facebook
            </Button>
          </div>
          <p className="text-center mt-5">
            Want to know more?{" "}
            <span
              className="font-medium text-base"
              style={{ color: "#1D4ED8" }}
            >
              Auction rules
            </span>
          </p>
        </div>
        <div className="w-1/3">

        </div>

        <div className="w-[620px] ">
          <img src={signup.src} alt="sign up page" className="object-fit" width={620}/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
