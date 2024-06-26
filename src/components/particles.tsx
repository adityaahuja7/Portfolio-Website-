import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.


const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadFull(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      name: "Particles",
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: ["connect"],
          },
        },
        modes: {
          connect: {
            distance:70,
            links: {
              opacity: 0.2,
            },
            radius: 70,
          },
        },
      },
      particles: {
        color: {
          value: "#B5CDCE",
        },
        move: {
          enable: true,
          bounce:true,
          outModes: {
            default: "bounce"
          },
          speed: 1,
        },
        number: {
          value: 650,
          density:{
            enable: true,
            area: 100,
          }
        },
        opacity: {
          animate:{
            enable: true,
            speed: 5,
          },
          value:{
            min:0.05,
            max:0.2,
          }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1,
        },
      },
      background: {
        color: "#0E0615",
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default App;
