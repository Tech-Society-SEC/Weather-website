import React from "react";
import SiteLogo from "./SiteLogo";

function Navbar() {
  return (
  <div className="text-white flex items-center justify-between p-5 shadow-2xl shadow-black">
    <SiteLogo />
    <div className="p-1 w-[50%]">
      <input type="text" placeholder="🔍 Search" className="rounded-2xl p-3 px-7 w-full text-3xl text-black"/>
    </div>
    <div>
      <div className="bg-slate-400 p-6 text-black font-extrabold text-3xl rounded-full">
        <h1>LJ</h1>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
