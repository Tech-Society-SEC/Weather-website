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
        background: { color: "#03225A" },
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: {
            value: ["#F5F5F5", "#A1CBFC"],
          },
          shape: { type: "star" },
          opacity: {
            value: 0.9,
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 3,
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
