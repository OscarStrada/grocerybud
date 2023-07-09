import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "TicTacToe",
    path: "/tic-tac-toe",
  },
];

const Navbar = () => {
  return (
    <header className="w-full px-10 py-5">
      <nav className="flex items-center justify-between">
        <span className="text-xl font-semibold">Logo</span>
        <ul className="flex gap-5">
          {links.map((link) => (
            <Link className="hover:text-blue-400" key={link.id} to={link.path}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
