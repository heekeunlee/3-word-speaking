import React, { useState, useEffect } from 'react';
import WordSlot from './WordSlot';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ArrowRight, RotateCcw } from 'lucide-react';

export default function QuizBuilder({ scenario, onComplete, onNext }) {
    const [selections, setSelections] = useState({ subject: '', verb: '', object: '' });
    const [activeSlot, setActiveSlot] = useState(null); // 'subject', 'verb', 'object'
    const [isCorrect, setIsCorrect] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        // Reset state when scenario changes
        setSelections({ subject: '', verb: '', object: '' });
        setIsCorrect(false);
        setShowFeedback(false);
        setActiveSlot(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scenario]);

    const handleSelect = (type, word) => {
        const newSelections = { ...selections, [type]: word };
        setSelections(newSelections);
        setActiveSlot(null);

        // Check if full sentence is formed
        if (newSelections.subject && newSelections.verb && newSelections.object) {
            checkAnswer(newSelections);
        }
    };

    const checkAnswer = (currentSelections) => {
        if (
            currentSelections.subject === scenario.answer.subject &&
            currentSelections.verb === scenario.answer.verb &&
            currentSelections.object === scenario.answer.object
        ) {
            handleSuccess();
        } else {
            // Wrong answer logic could be added (shake impact)
        }
    };

    const handleSuccess = () => {
        setIsCorrect(true);
        setShowFeedback(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F7E600', '#E91E63', '#000000']
        });
        onComplete();
    };

    const playAudio = () => {
        // Simple browser TTS
        const text = `${selections.subject} ${selections.verb} ${selections.object}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex-1">
                {/* Bad Sentence (Challenge) */}
                {!isCorrect && (
                    <div className="mb-8 p-4 bg-gray-100 rounded-lg text-center">
                        <p className="text-gray-500 text-sm mb-1">Bad Sentence 👎</p>
                        <p className="text-lg text-gray-400 line-through decoration-red-400 decoration-2">
                            {scenario.badSentence}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="font-bold text-gray-800">{scenario.korInfo}</p>
                        </div>
                    </div>
                )}

                {isCorrect && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mb-8 p-6 bg-yellow-50 rounded-2xl border-4 border-brand-yellow text-center"
                    >
                        <h2 className="text-2xl font-black text-black mb-2 leading-tight">
                            {selections.subject} <span className="text-brand-magenta">{selections.verb}</span> {selections.object}
                        </h2>
                        <button onClick={playAudio} className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                            <Volume2 size={16} /> Listen
                        </button>
                    </motion.div>
                )}

                {/* 3 Slots */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                    <WordSlot
                        label="WHO?"
                        value={selections.subject}
                        isActive={activeSlot === 'subject'}
                        onClick={() => !isCorrect && setActiveSlot('subject')}
                        isCorrect={isCorrect}
                    />
                    <WordSlot
                        label="DOES WHAT?"
                        value={selections.verb}
                        isActive={activeSlot === 'verb'}
                        onClick={() => !isCorrect && setActiveSlot('verb')}
                        isCorrect={isCorrect}
                    />
                    <WordSlot
                        label="WHAT?"
                        value={selections.object}
                        isActive={activeSlot === 'object'}
                        onClick={() => !isCorrect && setActiveSlot('object')}
                        isCorrect={isCorrect}
                    />
                </div>

                {/* Explanation Message */}
                {showFeedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-blue-50 text-blue-900 rounded-xl text-sm leading-relaxed"
                    >
                        <p className="font-bold mb-1">💡 Tip</p>
                        {scenario.explanation}
                    </motion.div>
                )}
            </div>

            {/* Options Sheet (Bottom) */}
            <AnimatePresence>
                {!isCorrect && activeSlot && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] rounded-t-2xl p-6 z-20 border-t border-gray-100"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold capitalize">Select {activeSlot}</h3>
                            <button onClick={() => setActiveSlot(null)} className="text-gray-400">Close</button>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {scenario.options[activeSlot + 's'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => handleSelect(activeSlot, opt)}
                                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-lg font-medium border border-gray-100 active:bg-brand-yellow/20"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Next Button */}
            {isCorrect && (
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onClick={onNext}
                    className="w-full bg-black text-white p-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-4"
                >
                    Next Sentence <ArrowRight size={20} />
                </motion.button>
            )}
        </div>
    );
}
