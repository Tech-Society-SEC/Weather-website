import React from "react";

function LeftPreferenceForm({
  preferenceForm,
  setValue,
  weather_preference,
  activity,
}) {
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <input
          type="text"
          value={preferenceForm.name}
          name="name"
          placeholder="Name"
          onChange={setValue}
          className="p-4 rounded-xl w-full"
        />
        <input
          type="number"
          value={preferenceForm.age}
          name="age"
          placeholder="Age"
          onChange={setValue}
          className="p-4 rounded-xl"
        />
        <select
          value={preferenceForm.weather}
          onChange={setValue}
          name="weather"
          className="p-4 rounded-xl w-full"
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
        <select
          value={preferenceForm.activity}
          name="activity"
          onChange={setValue}
          className="p-4 rounded-xl w-full"
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
      </div>
    </>
  );
}

export default LeftPreferenceForm;
