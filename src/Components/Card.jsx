import React from "react";
import card from "../Images/card.png";
import { IoHammerOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { IoBulbOutline } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur-sm -z-40">
        <div className="mt-20 flex justify-center">
          <div>
            <img className="" src={card} width={600} height={600} alt="" />
          </div>
        </div>
      </div>
      <br />
      <section className="mt-10">
        <div>heding</div>
        <div className=" flex justify-between mt-10 max-sm:flex-col">
          <div className="flex flex-col ">
            <div ><span><IoHammerOutline className=" hover:bg-red-700 rounded-full leading-[5rem] h-[5rem] w-[5rem] font-semibold ml-20 "></IoHammerOutline></span></div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              
            </div>
          </div>
          <div>
            <div ><span><TiPencil className=" hover:bg-red-700 rounded-full leading-[5rem] h-[5rem] w-[5rem] font-semibold ml-20 " /></span></div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              
            </div>
          </div>
          <div>
            <div><IoBulbOutline className=" hover:bg-red-700 rounded-full leading-[5rem] h-[5rem] w-[5rem] font-semibold ml-20 "></IoBulbOutline></div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis  
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
