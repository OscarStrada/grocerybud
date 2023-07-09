import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail" className="px-10 py-10">
        <Outlet />
      </div>
    </>
  );
}
