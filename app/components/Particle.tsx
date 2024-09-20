"use client"

import { distance } from "framer-motion";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";


const Particle = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, []) ;

    const particlesLoaded = useCallback(async () => {
    }, []) ;

  return (
    <> компонент 
    {/* <Particle
        className="h-screen"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullscreen: {enable: false}, 
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.5
                    }
                }
            },

            particles: {
                color: {
                    value: "#FFFFFF"                    
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width:  2                  
                },
                collisions: {
                    enable: true,
                },
                move: {
                    enable: true,
                    directions: 'top-left',
                    outModes: {
                        default: "bounce"
                    },
                    random: true,
                    straight: false,
                    speed: 1
                },
                // продолжить настройки
            }
        }}
    /> */}
    </>
  )
}

export default Particle