"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
    const router = useRouter()
  return (
    <div className="">
      <div className="navbar bg-orange-100 mb-10 px-72">
        <div className="flex-1">
          <button onClick={() => router.push('/')} className="btn btn-ghost text-xl">Mini Web Games</button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => router.push('/tic-tac-toe')} >Tic-Tac-Toe</button>
            </li>
            <li>
              <a>Wordle</a>
            </li>
            <li>
              <a>Sudoku</a>
            </li>            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
