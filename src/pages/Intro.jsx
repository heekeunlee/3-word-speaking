import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1000); // Show Bad
        const timer2 = setTimeout(() => setStep(2), 2500); // Explosion/Change
        const timer3 = setTimeout(() => setStep(3), 3500); // Show Good

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen px-6 relative overflow-hidden bg-brand-yellow">

            <AnimatePresence mode='wait'>
                {step === 1 && (
                    <motion.div
                        key="bad"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        className="text-2xl text-gray-500 font-serif italic mb-8 text-center"
                    >
                        "My hobby is reading books"
                    </motion.div>
                )}

                {step >= 2 && step < 3 && (
                    <motion.div
                        key="boom"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 0] }}
                        className="absolute text-6xl"
                    >
                        💥
                    </motion.div>
                )}

                {step >= 3 && (
                    <motion.div
                        key="good"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-4xl font-black text-black mb-2 text-center">
                            I enjoy<br /><span className="text-brand-magenta">reading!</span>
                        </h1>
                        <p className="text-sm font-bold mt-4 text-gray-700">3단어로 끝내는 영어</p>

                        <motion.button
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => navigate('/home')}
                            className="mt-12 bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
                        >
                            Start Learning
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
