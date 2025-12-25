import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import QuizBuilder from '../components/quiz/QuizBuilder';
import { useAppStore } from '../store/useAppStore';
import { ChevronLeft } from 'lucide-react';

export default function Chapter() {
    const { id } = useParams();
    const navigate = useNavigate();
    const chapter = chapters.find(c => c.id === parseInt(id));
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

    const { markScenarioComplete, saveSentence } = useAppStore();

    if (!chapter) return <div>Chapter not found</div>;

    const currentScenario = chapter.scenarios[currentScenarioIndex];
    const isLastScenario = currentScenarioIndex === chapter.scenarios.length - 1;

    const handleScenarioComplete = () => {
        markScenarioComplete(currentScenario.id);
        // Save to deck automatically
        saveSentence({
            id: currentScenario.id,
            text: `${currentScenario.answer.subject} ${currentScenario.answer.verb} ${currentScenario.answer.object}`,
            kor: currentScenario.korInfo,
            date: new Date().toISOString()
        });
    };

    const handleNext = () => {
        if (isLastScenario) {
            navigate('/home');
        } else {
            setCurrentScenarioIndex(prev => prev + 1);
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-screen bg-white">
            {/* Chapter specific header */}
            <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-white z-10">
                <button onClick={() => navigate('/home')} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                    <ChevronLeft size={24} />
                </button>
                <div className="ml-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Chapter {chapter.id}</span>
                    <h1 className="text-sm font-bold truncate max-w-[200px]">{chapter.title}</h1>
                </div>
                <div className="ml-auto text-xs font-bold text-brand-magenta">
                    {currentScenarioIndex + 1} / {chapter.scenarios.length}
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto pb-24">
                <QuizBuilder
                    scenario={currentScenario}
                    onComplete={handleScenarioComplete}
                    onNext={handleNext}
                />
            </div>
        </div>
    );
}
