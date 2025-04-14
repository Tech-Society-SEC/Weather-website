import React, { useEffect, useState } from "react";
import LeftPreferenceForm from "./LeftPreferenceForm";
import RightPreferenceForm from "./RightPreferenceForm";

function PreferenceForm({ setHasUser }) {
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
  const activityTimingOptions = [
    "Sunrise Hours (4 AM - 6 AM)",
    "Early Morning (6 AM - 8 AM)",
    "Morning (8 AM - 11 AM)",
    "Midday (11 AM - 2 PM)",
    "Afternoon (2 PM - 5 PM)",
    "Evening (5 PM - 7 PM)",
    "Sunset Hours (6 PM - 7 PM)",
    "Night (7 PM - 10 PM)",
    "Late Night (10 PM onwards)",
    "Anytime – I’m Flexible",
  ];
  const [tamilnaduPlaces, setTamilnaduPlaces] = useState([]);
  const [preferenceForm, setPreferenceForm] = useState({
    name: "",
    nickname: "",
    age: "",
    gender: "",
    weather: "",
    timing: "",
    activity: "",
    places: "",
  });
  const [preferenceFormError, setPreferenceFormError] = useState({
    name: false,
    nickname: false,
    age: false,
    gender: false,
    weather: false,
    timing: false,
    activity: false,
    places: false,
  });
  useEffect(() => {
    const place = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/refs/heads/master/states-and-districts.json"
        );
        const data = await response.json();
        console.log(data);
        setTamilnaduPlaces(data["states"][29]["districts"]);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };
    place();
  }, []);
  const setValue = (e) => {
    setPreferenceForm({ ...preferenceForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(preferenceForm).every(Boolean);
    if (!allFieldsFilled) {
      const emptyFields = Object.entries(preferenceForm)
        .filter(([key, value]) => !value)
        .map(([key]) => key);
      console.log(emptyFields);
      const newError = { ...emptyFields };
      emptyFields.forEach((field) => {
        newError[field] = true;
      });
      setPreferenceFormError(newError);
    } else {
      localStorage.setItem("user-preference", JSON.stringify(preferenceForm));
      setHasUser(true);
    }
  };
  return (
    <form>
      <div className="text-black text-3xl flex gap-28 justify-between items-center w-full">
        <LeftPreferenceForm
          preferenceForm={preferenceForm}
          setValue={setValue}
          weather_preference={weather_preference}
          activity={activity}
          preferenceFormError={preferenceFormError}
        />
        <RightPreferenceForm
          preferenceForm={preferenceForm}
          setValue={setValue}
          activityTimingOptions={activityTimingOptions}
          tamilnaduPlaces={tamilnaduPlaces}
          preferenceFormError={preferenceFormError}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="p-5 rounded-2xl mt-10 text-3xl w-1/4 font-semibold bg-indigo-950 text-white border-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PreferenceForm;
