import React from "react";
import { GrGroup } from "react-icons/gr";
import { MdAttachMoney, MdOutlineSecurity } from "react-icons/md";
import { LuScaling } from "react-icons/lu";
const Feautures = () => {
  return (
    <div
      id="features"
      className="container grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-20"
    >
      <div className="flex flex-col gap-3 text-white">
        <div>
          <GrGroup className="text-7xl text-white bg-gradient-to-tr from-purple-500 to-blue-950 p-4 rounded-full" />
        </div>
        <div className="text-2xl font-semibold">Interoperability</div>
        <div className="leading-7 text-gray-300/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          incidunt
        </div>
      </div>
      <div className="flex flex-col gap-3 text-white">
        <div>
          <MdAttachMoney className="text-7xl text-white bg-gradient-to-tr from-purple-500 to-blue-950 p-4 rounded-full" />
        </div>
        <div className="text-2xl font-semibold">Affordability</div>
        <div className="leading-7 text-gray-300/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          incidunt
        </div>
      </div>{" "}
      <div className="flex flex-col gap-3 text-white">
        <div>
          <MdOutlineSecurity className="text-7xl text-white bg-gradient-to-tr from-purple-500 to-blue-950 p-4 rounded-full" />
        </div>
        <div className="text-2xl font-semibold">Security</div>
        <div className="leading-7 text-gray-300/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          incidunt
        </div>
      </div>{" "}
      <div className="flex flex-col gap-3 text-white">
        <div>
          <LuScaling className="text-7xl text-white bg-gradient-to-tr from-purple-500 to-blue-950 p-4 rounded-full" />
        </div>
        <div className="text-2xl font-semibold">Scalability</div>
        <div className="leading-7 text-gray-300/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          incidunt
        </div>
      </div>
    </div>
  );
};

export default Feautures;
