'use client';
import { motion } from 'framer-motion';

const AnimatedSeparator = () => {
    return (
        <div className="relative w-full h-px py-8 flex items-center justify-center overflow-hidden">
            {/* Main expanding line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/80 to-transparent"
            />

            {/* Left moving particle */}
            <motion.div
                initial={{ left: "50%", opacity: 0 }}
                whileInView={{ left: "0%", opacity: 0 }}
                viewport={{ once: true }}
                animate={{
                    left: ["50%", "0%"],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent to-purple-400 blur-[1px]"
            />

            {/* Right moving particle */}
            <motion.div
                initial={{ right: "50%", opacity: 0 }}
                whileInView={{ right: "0%", opacity: 0 }}
                viewport={{ once: true }}
                animate={{
                    right: ["50%", "0%"],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute h-[2px] w-20 bg-gradient-to-l from-transparent to-purple-400 blur-[1px]"
            />

            {/* Center Glow */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="absolute w-32 h-1 bg-purple-500/50 blur-xl rounded-full"
            />
        </div>
    );
};

export default AnimatedSeparator;
