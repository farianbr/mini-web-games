import GameCard from "./components/GameCard";

export default function Home() {
  const ticTacToeDescription =
    "Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.";
  const wordleDescription =
    "Wordle is a web-based word game where players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position";
  return (
    <main className="h-full">
      <div className="flex-1 flex pb-20 h-full justify-center gap-10 items-center mx-20">
        <GameCard
          title="Tic Tac Toe"
          description={ticTacToeDescription}
          photo="/tic-tac-toe.png"
          url="/tic-tac-toe"
        />
        <GameCard
          description={wordleDescription}
          title="Wordle"
          photo="/tic-tac-toe.png"
          url="/wordle"
        />
        {/* <GameCard /> */}
      </div>
    </main>
  );
}
