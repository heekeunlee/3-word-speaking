import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { motion } from 'framer-motion';
import { Volume2, Trash2 } from 'lucide-react';

export default function MyDeck() {
    const { savedSentences, removeSentence } = useAppStore();

    const playAudio = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="p-6 pt-2 pb-24">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1">My 3-Word Deck</h2>
                <p className="text-gray-500 text-sm">{savedSentences.length} collected sentences</p>
            </div>

            {savedSentences.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <p>No sentences yet.</p>
                    <p className="text-sm mt-2">Finish a chapter to collect cards!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {savedSentences.map((card) => (
                        <motion.div
                            layout
                            key={card.id}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative group"
                        >
                            <button
                                onClick={() => removeSentence(card.id)}
                                className="absolute top-3 right-3 text-gray-300 hover:text-red-400 p-1"
                            >
                                <Trash2 size={16} />
                            </button>

                            <h3 className="text-xl font-bold text-black mb-1 pr-6">{card.text}</h3>
                            <p className="text-sm text-gray-500 mb-4">{card.kor}</p>

                            <button
                                onClick={() => playAudio(card.text)}
                                className="inline-flex items-center gap-2 text-xs font-bold text-brand-magenta bg-pink-50 px-3 py-1.5 rounded-full"
                            >
                                <Volume2 size={14} /> Listen
                            </button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
