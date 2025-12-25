import React from 'react';
import { motion } from 'framer-motion';

export default function WordSlot({ label, value, isActive, onClick, isCorrect }) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        relative w-full p-4 rounded-xl border-2 text-center transition-all duration-200
        ${isCorrect
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : isActive
                        ? 'bg-white border-brand-magenta text-black shadow-md ring-2 ring-brand-magenta/20'
                        : value
                            ? 'bg-white border-brand-dark text-black'
                            : 'bg-gray-50 border-gray-200 text-gray-400 border-dashed'}
      `}
        >
            <span className="text-xs absolute top-2 left-1/2 -translate-x-1/2 font-bold uppercase tracking-wider text-gray-400">
                {label}
            </span>
            <div className="mt-4 text-lg font-bold min-h-[1.5rem]">
                {value || "?"}
            </div>
        </motion.button>
    );
}
