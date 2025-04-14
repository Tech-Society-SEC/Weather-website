import React from "react";

function LeftPreferenceForm({
  preferenceForm,
  setValue,
  weather_preference,
  activity,
  preferenceFormError,
}) {
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <div>
          <input
            type="text"
            value={preferenceForm.name}
            name="name"
            placeholder="Name"
            onChange={setValue}
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.name ? "border-8 border-red-700" : ""
            }`}
          />
          {preferenceFormError.name && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <input
            type="number"
            value={preferenceForm.age}
            name="age"
            placeholder="Age"
            onChange={setValue}
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.age ? "border-8 border-red-700" : ""
            }`}
          />
          {preferenceFormError.age && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <select
            value={preferenceForm.weather}
            onChange={setValue}
            name="weather"
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.weather ? "border-8 border-red-700" : ""
            }`}
          >
            <option>Weather Preference</option>
            {weather_preference.map((value) => {
              return (
                <option value={value.toLowerCase} key={value}>
                  {value}
                </option>
              );
            })}
          </select>
          {preferenceFormError.weather && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
        <div>
          <select
            value={preferenceForm.activity}
            name="activity"
            onChange={setValue}
            className={`p-4 rounded-xl w-full ${
              preferenceFormError.activity ? "border-8 border-red-700" : ""
            }`}
          >
            <option>Preferred Activity</option>
            {activity.map((value) => {
              return (
                <option value={value.toLowerCase} key={value}>
                  {value}
                </option>
              );
            })}
          </select>
          {preferenceFormError.activity && (
            <div className="text-slate-300 pt-3">Invalid Data</div>
          )}
        </div>
      </div>
    </>
  );
}

export default LeftPreferenceForm;
