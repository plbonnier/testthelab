/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import close from "../../assets/vector/croix.svg";

export default function PopupAtelier(props) {
  return props.trigger ? (
    <div className="fixed top-1/3  md:w-[70%]  w-[90%] h-80 flex justify-around items-center bg-gradient-to-b from-background-color-second to-background-color-first rounded-xl border-2 border-white">
      <div className="relative  w-[95%] ">
        <button
          className="absolute -top-8 left-[90%] w-5 h-5 md:left-[99%]"
          onClick={() => props.setTrigger(false)}
        >
          <img src={close} alt="close" className=" h-8" />
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
}
