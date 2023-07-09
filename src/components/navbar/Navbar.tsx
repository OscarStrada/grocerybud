import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full px-10 py-5">
      <nav className="flex items-center justify-between">
        <span className="text-xl font-semibold">Logo</span>
        <ul className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/tic-tac-toe">TicTacToe</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
