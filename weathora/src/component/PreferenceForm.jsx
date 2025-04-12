import React from "react";

function PreferenceForm() {
  const weather_preference = [
    "Sunny",
    "Cloudy",
    "Rainy",
    "Windy",
    "Snowy",
    "Foggy",
    "Mild-Pleasant",
  ];
  const activity = [
    "Indoor games",
    "Outdoor Games",
    "Self-care and Relaxation",
    "Social Activities",
    "Adventure",
    "Travel",
    "Fitness Activity",
    "Entertainment",
    "Chill",
  ];
  return (
    <form className="text-black text-3xl flex gap-28 justify-between items-center w-full">
      <div className="flex flex-col gap-10 w-full">
        <input
          type="text"
          placeholder="Name"
          className="p-4 rounded-xl w-full"
        />
        <input type="number" placeholder="Age" className="p-4 rounded-xl" />
        <select className="p-4 rounded-xl w-full">
          <option>Weather Preference</option>
          {weather_preference.map((value) => {
            return (
              <option value={value.toLowerCase} key={value}>
                {value}
              </option>
            );
          })}
        </select>
        <select className="p-4 rounded-xl w-full">
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
      <div className="flex flex-col w-full gap-10">
        <input type="text" placeholder="Nick-Name" className="p-4 rounded-xl" />
        <div className="flex justify-between">
          <label className="flex items-center gap-2 text-white text-4xl">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="w-5 h-5"
            />
            Male
          </label>
          <label className="flex items-center gap-2 text-white text-4xl">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="w-5 h-5"
            />
            Female
          </label>
        </div>
        
      </div>
    </form>
  );
}

export default PreferenceForm;
