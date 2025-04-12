import React from "react";
import BubbleBackground from "./BubbleBackground";
import PreferenceForm from "./PreferenceForm";
import SiteLogo from "./SiteLogo";

function UserPreference({ setHasUser }) {
  return (
    <div className="py-10 flex justify-between">
      <div className="flex items-center pl-20">
        <img src="image.png" alt="User" className="h-[32rem] rounded-full" />
      </div>
      <div>
        <div className="pb-4 flex flex-col justify-center items-center gap-2">
          <SiteLogo showText={false} />
          <h1 className="text-4xl font-extrabold text-white">Weathora</h1>
        </div>
        <h1 className="text-white text-center text-4xl">
          User Preference Form
        </h1>
        <div className="flex justify-center items-center p-10">
          <div className="bg-blue-200 bg-opacity-15 rounded-3xl p-10 flex justify-center items-center">
            <PreferenceForm setHasUser={setHasUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPreference;
