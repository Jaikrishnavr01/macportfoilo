import { dockApps } from '#constants';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { Tooltip } from 'react-tooltip';

const Dock = () => {
    const{ openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const { left: dockLeft } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const center = rect.left + rect.width / 2;

                // Distance between mouse and icon center
                const distance = Math.abs(mouseX - center);

                // Smooth intensity curve
                const intensity = Math.exp(-(distance ** 2.5) / 1800);

                gsap.to(icon, {
                    scale: 1 + 0.35 * intensity,
                    y: -18 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove = (e) => {
            animateIcons(e.clientX);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    });

    const toggleApp = (app) => {
       if (!app.canOpen) return;

       const window = windows[app.id];

       if (!window) {
        console.error(`window not found for app id: ${app.id}`);
        return;
       }

       if (window.isOpen) {
           closeWindow(app.id);
       } else {
           openWindow(app.id);
       }

    //    console.log(windows);
};


    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container flex gap-4">
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className="relative flex justify-center">
                        <button
                            type="button"
                            className="dock-icon"
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={canOpen ? "" : "opacity-60"}
                            />
                        </button>
                    </div>
                ))}

                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    );
};

export default Dock;
