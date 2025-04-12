import React from "react";

function RightPreferenceForm({
  preferenceForm,
  setValue,
  activityTimingOptions,
  tamilnaduPlaces,
}) {
  return (
    <>
      <div className="flex flex-col w-full gap-10">
        <input
          type="text"
          value={preferenceForm.nickname}
          name="nickname"
          onChange={setValue}
          placeholder="Nick-Name"
          className="p-4 rounded-xl"
        />
        <div className="flex justify-between rounded-xl text-white outline outline-2 outline-green-300 pr-5 p-0">
          <label className="flex items-center p-4 gap-2 text-4xl">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={setValue}
              checked={preferenceForm.gender === "Male"}
              className="w-5 h-5 border-red-800 text-red-800 accent-red-800"
            />
            Male
          </label>
          <label className="flex items-center gap-2 text-4xl">
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={setValue}
              checked={preferenceForm.gender === "Female"}
              className="w-5 h-5 border-red-800 text-red-800 accent-red-800"
            />
            Female
          </label>
        </div>
        <select
          value={preferenceForm.timing}
          name="timing"
          onChange={setValue}
          className="p-4 rounded-xl w-full"
        >
          <option>Activity Preferred Timing</option>
          {activityTimingOptions.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
        <select
          value={preferenceForm.places}
          name="places"
          onChange={setValue}
          className="p-4 rounded-xl w-full"
        >
          <option>Default Places</option>
          {tamilnaduPlaces.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default RightPreferenceForm;
