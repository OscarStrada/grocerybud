import { Square } from "./components";

const TicTacToe = () => {
  return (
    <div className="text-center text-5xl">
      <h1 className="font-bold text-blue-500">Tic Tac Toe</h1>
      <div>
        <Square />
      </div>
    </div>
  );
};

export default TicTacToe;
