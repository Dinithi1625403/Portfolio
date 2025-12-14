'use client';
import { motion } from 'framer-motion';

export const ScrollRevealText = ({ text, className = "", delay = 0, speed = 0.02 }) => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
            className={`flex flex-wrap ${className}`}
        >
            {text.split(" ").map((word, index) => (
                <span key={index} className="whitespace-nowrap mr-[0.25em]">
                    {Array.from(word).map((char, charIndex) => (
                        <motion.span variants={child} key={charIndex} className="inline-block">
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
};

export default ScrollRevealText;
