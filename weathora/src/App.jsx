import React, { useEffect, useState } from "react";
import BubbleBackground from "./components/BubbleBackground";
import UserPreference from "./components/UserPreference";
import Navbar from "./components/Navbar";

function App() {
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user-preference");
    if (userData) {
      setHasUser(true);
    }
  }, []);
  return (
    <>
      <BubbleBackground />
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload(); // force reload after clearing
        }}
        className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-lg"
      >
        Reset User Data
      </button>

      {hasUser ? (
        <>
          <Navbar />
        </>
      ) : (
        <UserPreference setHasUser={() => setHasUser(true)} />
      )}
    </>
  );
}

export default App;
