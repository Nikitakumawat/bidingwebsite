"use client";
import React from "react";
import SuccessSignUpIcon from "../../assets/icons/success-sign-up.svg";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

function SignUpSuccess() {
  return (
    <div className=" flex flex-col text-center items-center justify-center full-width-wrapper gap-10 my-8">
      <div className="flex w-full justify-center">
        <p className="font-extrabold text-[35px]">
          Uncovers Deals, Unleash Excitement :{" "}
       
        <span  style={{ color: "#235BDB" }}>
          Dive into our Auctions Today!
        </span>
        </p>
      </div>
      <div className="min-w-[488px] max-h-[488px]">
        <Image
          src={SuccessSignUpIcon.src}
          alt="successful sign up"
          className="z-0 w-full h-[488px] object-contains"
        />
      </div>
      <Button
        as={Link}
        color="primary"
        href="/login"
        variant="flat"
        style={{
          color: "#fff",
          background:
            "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
        }}
        className="rounded-none ml-1"
      >
        Login now
      </Button>
    </div>
  );
}

export default SignUpSuccess;
