import React from "react";

function SiteLogo({showText}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <img src="Logo.jpg" alt="Logo" className="h-20 w-20 rounded-full" />
        {showText && (<h1 className="text-4xl font-extrabold text-white">Weathora</h1>)}
      </div>
    </>
  );
}

export default SiteLogo;
