import React from 'react';
import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { useAppStore } from '../store/useAppStore';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';

export default function Home() {
    const completedScenarios = useAppStore((state) => state.completedScenarios);

    // Calculate progress for a chapter
    const getProgress = (chapter) => {
        const total = chapter.scenarios.length;
        const completed = chapter.scenarios.filter(s => completedScenarios.includes(s.id)).length;
        return Math.round((completed / total) * 100);
    };

    return (
        <div className="p-6 pt-2">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-1">Let's Speak!</h2>
                <p className="text-gray-500 text-sm">Choose a topic to practice.</p>
            </div>

            <div className="space-y-4">
                {chapters.map((chapter) => {
                    const progress = getProgress(chapter);

                    return (
                        <Link
                            key={chapter.id}
                            to={`/chapter/${chapter.id}`}
                            className="block group"
                        >
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8 rounded-full opacity-20 ${chapter.color === 'bg-white' ? 'bg-yellow-400' : 'bg-blue-400'}`} />

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                        CHAPTER {chapter.id}
                                    </span>
                                    {progress === 100 ? (
                                        <CheckCircle2 className="text-green-500" size={20} />
                                    ) : (
                                        <div className="flex items-center text-xs font-bold text-gray-300">
                                            {progress}%
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 relative z-10">
                                    {chapter.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 relative z-10">
                                    {chapter.description}
                                </p>

                                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden relative z-10">
                                    <div
                                        className="bg-brand-magenta h-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
