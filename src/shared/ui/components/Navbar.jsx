import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-800 p-4 rounded-xl gap-10 text-xl text-white">
      <h1>Logo</h1>
      <div className="flex items-center gap-10 text-xl">
        <NavLink
          to={"/main"}
          className={({ isActive }) => {
            isActive ? "text-blue-950" : "text-white";
          }}
          end
        >
          Home
        </NavLink>
        <NavLink
          to={"/main/products"}
          className={({ isActive }) => {
            isActive ? "text-blue-950" : "text-white";
          }}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            isActive ? "text-blue-950" : "text-white";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <NavLink
          className={({ isActive }) => {
            isActive ? "text-blue-950" : "text-white";
          }}
          to={"/main/cart"}
        >
          <ShoppingCart className="cursor-pointer" />
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            isActive ? "text-blue-950" : "text-white";
          }}
          to={"/main/orders"}
        >
          <Box className="cursor-pointer" />
        </NavLink>
        <button className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 font-semibold text-white cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
