"use client";

import React from "react";

const page = () => {
  return (
    <div className="h-full w-full">
      <h1 className="sm:text-3xl text-lg font-bold text-gray-900 mt-4 text-center border-gray-950 border-b-2 w-1/4 mx-auto">
        Wordle
      </h1>
      <div className="grid grid-cols-4 w-1/4 mx-auto">
        <input
            maxLength={1}
          type="text"
          className="border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Box 1"
        />
        <input
          type="text"
          className="border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Box 2"
        />
        <input
          type="text"
          className="border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Box 3"
        />
        <input
          type="text"
          className="border border-gray-300 px-2 py-2 rounded-md"
          placeholder="Box 4"
        />
      </div>
    </div>
  );
};

export default page;
