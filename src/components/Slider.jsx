import React from "react";
import {Slider} from "@nextui-org/react";

export default function Slider1({music}) {
  return (
    <Slider 
      size="sm"
      label=" 00:00"
      defaultValue={80}
      classNames={{
        base: "max-w-md gap-3",
        track: "border-s-secondary-100",
        filler: "bg-gradient-to-r from-secondary-100 to-secondary-500"
      }}
      renderThumb={(props) => (
        <div
          {...props}
          className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
        </div>
      )}
    />
  );
}
