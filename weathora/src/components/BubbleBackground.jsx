import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BubbleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000957" }, // Light blue watery feel
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: {
            value: ["#EEEEEE", "#00ADB5"], // Two colors for particles
          },
          shape: { type: "star" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 3, // Try 2–4
              size_min: 3, // Smallest size while pulsing
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "top",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              size: 15,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
