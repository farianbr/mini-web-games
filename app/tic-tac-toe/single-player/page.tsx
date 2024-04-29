import React from "react";
import Board from "../components/Board";

const TicTacToe = () => {
  return (
    <div className="h-full w-full">
      <h1 className="sm:text-3xl text-lg font-bold text-gray-900 mt-4 text-center border-gray-950 border-b-2 w-1/4 mx-auto">
      Tic-tac-toe
      </h1>
      <Board />
    </div>
  );
};

export default TicTacToe;
