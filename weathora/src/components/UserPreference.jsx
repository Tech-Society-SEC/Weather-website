import React from "react";
import BubbleBackground from "./BubbleBackground";
import PreferenceForm from "./PreferenceForm";
import SiteLogo from "./SiteLogo";

function UserPreference({ setHasUser }) {
  return (
    <div className="py-5">
      <div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <SiteLogo />
          <h1 className="text-4xl font-extrabold text-white">Weathora</h1>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="bg-[#02336A] rounded-3xl p-10 flex flex-col gap-10 justify-center items-center border-4">
            <h1 className="text-white text-center text-4xl font-semibold">
              User Preference Form
            </h1>
            <PreferenceForm setHasUser={setHasUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPreference;
