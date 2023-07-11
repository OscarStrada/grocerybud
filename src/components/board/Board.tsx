import { Square } from "../index";

const Board = () => {
  return (
    <div>
      <div>
        <Square number={1} />
        <Square number={2} />
        <Square number={3} />
      </div>

      <div>
        <Square number={4} />
        <Square number={5} />
        <Square number={6} />
      </div>

      <div>
        <Square number={7} />
        <Square number={8} />
        <Square number={9} />
      </div>
    </div>
  );
};

export default Board;
