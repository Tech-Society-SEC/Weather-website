import React from "react";
import BubbleBackground from "./BubbleBackground";
import PreferenceForm from "./PreferenceForm";

function UserPreference() {
  return (
    <div className="py-10">
      <h1 className="text-white text-center text-4xl">
        User Preference Form
      </h1>
      <div className="flex justify-center items-center p-10">
        <div className="bg-blue-200 bg-opacity-15 rounded-3xl p-10 flex justify-center items-center w-3/4">
          <PreferenceForm />
        </div>
      </div>
    </div>
  );
}

export default UserPreference;
