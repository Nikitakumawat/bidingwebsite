"use client";
import React, { useState } from "react";
import { auctionItems } from "../../../data/items";
import ItemCard from "../../ItemCard";
import { Button } from "@nextui-org/react";

// standalone prop can be used to display all items on logged in users page
function Catalogue({ standalone = false }) {
  const [displayedRecords, setDisplayedRecords] = useState(10);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setDisplayedRecords(showMore ? auctionItems.length : 10);
    setShowMore(!showMore);
  };
  return (
    <div className="flex flex-wrap  my-8 mx-32">
      <h1 className="text-[40px] font-extrabold">
        Explore <span style={{ color: "#235BDB" }}>Auctions</span>
      </h1>
      <div className="flex-grow flex flex-wrap gap-6 mt-5">
        {auctionItems && auctionItems.length
          ? auctionItems
              .slice(0, standalone ? undefined : displayedRecords)
              .map((currentItem) => (
                <div
                  key={currentItem.id}
                  className="w-full md:w-[257px] lg:w-[257px] "
                >
                  <ItemCard details={currentItem} />
                </div>
              ))
          : null}
      </div>
      {!standalone && auctionItems.length > 10 ? (
        <div className="flex justify-center w-full mt-12">
          <Button
            size="md"
            radius="md"
            color="primary"
            onClick={handleShowMore}
            style={{
              color: "#fff",
              background:
                "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
            }}
            className="rounded-none ml-3"
          >
            {showMore ? "Load more..." : "Show Less"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default Catalogue;
