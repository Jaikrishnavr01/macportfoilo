import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const FONT_WEIGHT = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseweight = 400) => {
    return [...text].map((char, index) => (
        <span
            key={index}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseweight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setupTextHover = (Container, type) => {
    if (!Container) return () => {};

    const letters = Container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e) => {
        const { left } = Container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseleave = () => {
        letters.forEach((letter) =>
            animateLetter(letter, base, 0.3)
        );
    };

    // Attach events ONCE
    Container.addEventListener('mousemove', handleMouseMove);
    Container.addEventListener('mouseleave', handleMouseleave);

    // Return cleanup function
    return () => {
        Container.removeEventListener('mousemove', handleMouseMove);
        Container.removeEventListener('mouseleave', handleMouseleave);
    };
};

const Welcome = () => {
    const titleref = useRef(null);
    const subtitleref = useRef(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleref.current, 'title');
        const subtitleCleanup = setupTextHover(subtitleref.current, 'subtitle');

        return () => {
            subtitleCleanup();
            titleCleanup();
        };
    }, []);

    return (
        <section id='welcome'>
            <p ref={subtitleref}>
                {renderText(
                    "Hey, I'm Jaikrishna! welcome to my",
                    "text-3xl font-georama",
                    100
                )}
            </p>

            <h1 ref={titleref} className='mt-7'>
                {renderText("portfolio", "text-9xl italic font-georama")}
            </h1>

            <div className='small-screen'>
                <p>This portfolio is designed for desktop/tablet screen</p>
            </div>
        </section>
    );
};

export default Welcome;
