'use client'
import React, { useState } from "react";
import Square from "./Square";
import { useRouter } from "next/navigation";

const Board = () => {
  const [boardState, setBoardState] = useState(new Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const router = useRouter()

  const checkWinner = (newBoardState) => {
    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let state of winningStates) {
      if (
        newBoardState[state[0]] !== null &&
        newBoardState[state[0]] === newBoardState[state[1]] &&
        newBoardState[state[1]] === newBoardState[state[2]]
      ) {
        return newBoardState[state[0]];
      }
    }
    return null;
  };

  const handleClick = (idx) => {
    if (boardState[idx] !== null) {
      return;
    }

    if (isGameOver) {
      return;
    }

    let newBoardState = [...boardState];
    newBoardState[idx] = isXTurn ? "X" : "O";
    setBoardState(newBoardState);

    if (checkWinner(newBoardState)) {
      setIsGameOver(true);
      return;
    }

    setIsDraw(!newBoardState.includes(null));

    setIsXTurn(!isXTurn);
  };

  return (
    <div className=" py-4 w-screen">
      <div className="bg-slate-200 m-8 p-8 sm:mt-20 sm:mb-10 sm:w-2/5 sm:mx-auto sm:px-16 sm:py-10 ">
      <div className="mb-10 text-center text-xl font-bold">Player {isXTurn ? "X" : "O"} Turn</div>
      <div className="flex items-center justify-center ">
        <div>
          <Square onClick={() => handleClick(0)} value={boardState[0]} />
          <Square onClick={() => handleClick(3)} value={boardState[3]} />
          <Square onClick={() => handleClick(6)} value={boardState[6]} />
        </div>
        <div>
          <Square onClick={() => handleClick(1)} value={boardState[1]} />
          <Square onClick={() => handleClick(4)} value={boardState[4]} />
          <Square onClick={() => handleClick(7)} value={boardState[7]} />
        </div>
        <div>
          <Square onClick={() => handleClick(2)} value={boardState[2]} />
          <Square onClick={() => handleClick(5)} value={boardState[5]} />
          <Square onClick={() => handleClick(8)} value={boardState[8]} />
        </div>
      </div>
      </div>
      {(isGameOver || isDraw) && (
        <div className="my-4 sm:my-8 sm:mx-48 text-center bg-yellow-100  border-yellow-500 text-yellow-700 p-4">
          {isGameOver && (
            <div className="">Player {isXTurn ? "X" : "O"} Won!</div>
          )}
          {isDraw && <p className="">Game Draw!</p>}
        </div>
      )}
      <div className="flex w-full justify-center gap-5">
      <button
        onClick={() => {
          setBoardState(new Array(9).fill(null));
          setIsGameOver(false);
          setIsDraw(false);
        }}
        className="btn btn-primary"
      >
        Reset
      </button>
      <button onClick={() => router.push('/tic-tac-toe')} className="btn">Go back</button>
      </div>
    </div>
  );
};

export default Board;
