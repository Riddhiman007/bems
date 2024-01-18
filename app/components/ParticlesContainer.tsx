"use client";
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, RecursivePartial, IOptions } from "@tsparticles/engine";
import { IsMobileContext } from "@/contexts/IsMobileContext";

export default function ParticlesContainer() {
  const [init, setInit] = useState(false);
  const isMobile = useContext(IsMobileContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container) => console.log(container),
    [],
  );

  const options = useMemo<RecursivePartial<IOptions>>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "" } },
      fps_limit: 120,
      interactivity: {
        events: {
          onClick: { enable: !isMobile, mode: "push" },

          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 90 },
          repulse: { distance: 100, duration: 0.4 },
        },
        detectsOn: "parent",
      },
      particles: {
        color: { value: "#fff" },
        links: {
          value: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, height: 800, width: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isMobile],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        //   init={particlesInit}
        //   loaded={particlesLoaded}

        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-y-0 right-10 z-20"
      />
    );
  }
  return <></>;
}
