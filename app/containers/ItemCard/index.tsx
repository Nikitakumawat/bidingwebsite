"use client";
import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "./Icons";
import { AuctionItem } from "@/app/data/items";

export default function ItemCard({ details }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="w-[257px]">
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
        className="product_card h-max-full p-3 rounded-none"
      >
        <CardBody className="overflow-visible p-0">
          <div className="absolute z-999 top-1 flex-col items-end"></div>
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={details.title}
            className="w-full object-cover h-[265px]"
            src={details.image}
          />
          <div
            className="mt-2 px-3 py-[4.5px] w-[94px] text-xs font-normal"
            style={{
              background: "#21A67A",
              color: "#fff",
              borderRadius: "6px",
            }}
          >
            Live Auction
          </div>
          <p className="font-semibold text-base mt-1">{details.title}</p>
          <div>
            <div className="flex justify-between mt-1">
              <p className="text-base font-normal">Minimum Bid</p>
              <p className="text-2xl font-extrabold">
                $ {details?.minimum_bid}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-normal">Current Bid</p>
              <p className="text-2xl font-extrabold">
                $ {details?.current_bid}
              </p>
            </div>
           
              <p className="text-base font-normal">Ends in: {details.ends_in}</p>
              
           
          </div>
          <Button
            className="rounded-none mt-3"
            fullWidth
            style={{
              color: "#fff",
              background:
                "linear-gradient(79.69deg, #DB2721 -0.64%, #5AD7FE 107.84%)",
            }}
          >
            Bid now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
