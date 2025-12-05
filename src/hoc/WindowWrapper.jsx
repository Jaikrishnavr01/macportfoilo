import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React, { useLayoutEffect, useRef } from 'react';

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];
    const ref = useRef(null);

    // OPEN ANIMATION
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      // Ensure visible first
      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // Draggable
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress() {
          focusWindow(windowKey);
        },
      });

      return () => instance.kill();
    });

    // SHOW/HIDE & MAXIMIZE
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      // Hide if closed or minimized
      if (!isOpen || isMinimized) {
        el.style.display = "none";
        return;
      } else {
        el.style.display = "block";
      }

      // Maximize
      if (isMaximized) {
        el.style.width = "90vw";
        el.style.height = "90vh";
        el.style.top = "0";
        el.style.left = "0";
        el.style.borderRadius = "0";
      } else {
        // Reset to normal size (optional, you can define your default size)
        el.style.width = "";
        el.style.height = "";
        el.style.top = "";
        el.style.left = "";
        el.style.borderRadius = "";
      }
    }, [isOpen, isMinimized, isMaximized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute will-change-transform"
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
