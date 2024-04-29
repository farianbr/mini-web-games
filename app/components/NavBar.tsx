"use client";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="">
      <div className="navbar bg-orange-100 mb-10 lg:px-80">
        <div className="flex-1">
          <button
            onClick={() => router.push("/")}
            className="btn btn-ghost text-xl"
          >
            Mini Web Games
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => router.push("/tic-tac-toe")}>
                Tic-Tac-Toe
              </button>
            </li>
            <li>
              <a>Wordle</a>
            </li>
            <li>
              <a>Sudoku</a>
            </li>
          </ul>
        </div>
        <div className="">
          {session ? (
            <>
              Signed in as {session?.user?.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              Not signed in <br />
              <button
                onClick={() =>
                  signIn("github", { redirect: false }).then((callback) => {
                    if (callback?.error) {
                      // toast.error("Invalid credentials");
                      console.log(callback);
                    }

                    if (callback?.ok && !callback?.error) {
                      // toast.success("Logged in!");
                      console.log(callback);
                    }
                  })
                }
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
