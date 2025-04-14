import React from "react";

function RightPreferenceForm({
  preferenceForm,
  setValue,
  activityTimingOptions,
  tamilnaduPlaces,
  preferenceFormError,
}) {
  return (
    <>
      <div className="flex flex-col w-full gap-10">
        <div>
          <input
            type="text"
            value={preferenceForm.nickname}
            name="nickname"
            onChange={setValue}
            placeholder="Nick-Name"
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.weather ? "border-8 border-red-700" : ""
            }`}
          />
          {preferenceFormError.nickname && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <div
            className={`flex justify-between rounded-xl text-white pr-5 p-0 ${
              preferenceFormError.gender
                ? "border-8 border-red-700"
                : "outline outline-2 outline-green-300"
            }`}
          >
            <label className="flex items-center p-4 gap-2 text-4xl">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={setValue}
                checked={preferenceForm.gender === "Male"}
                className={`w-5 h-5  accent-green-800`}
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
                className="w-5 h-5 accent-green-800"
              />
              Female
            </label>
          </div>
          {preferenceFormError.gender && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <select
            value={preferenceForm.timing}
            name="timing"
            onChange={setValue}
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.timing ? "border-8 border-red-700" : ""
            }`}
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
          {preferenceFormError.timing && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <select
            value={preferenceForm.places}
            name="places"
            onChange={setValue}
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.places ? "border-8 border-red-700" : ""
            }`}
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
          {preferenceFormError.places && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
      </div>
    </>
  );
}

export default RightPreferenceForm;
