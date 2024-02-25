'use client'
import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
    cursor-default 
    mr-1 
    mb-1 
    border 
    border-stone-950 
    h-20 
    w-20 
    flex 
    items-center 
    justify-center
    hover:bg-slate-300
    "
    >
      {value}
    </div>
  );
};

export default Square;
