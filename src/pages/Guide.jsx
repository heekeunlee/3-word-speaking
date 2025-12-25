import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Guide() {
    return (
        <div className="p-6 pt-2 pb-24">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1">Learning Guide (가이드)</h2>
                <p className="text-gray-500 text-sm">The 3-Word English Method</p>
            </div>

            <div className="space-y-6">
                {/* Core Philosophy */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-brand-yellow p-2 rounded-lg">
                            <span className="text-2xl">💡</span>
                        </div>
                        <h3 className="text-lg font-bold">Simply Speak in 3 Words</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Don't try to make perfect, complex sentences. Just remember this simple structure:
                    </p>
                    <div className="mt-4 flex justify-between items-center text-center font-bold bg-gray-50 p-4 rounded-xl text-sm">
                        <div className="text-brand-magenta">Subject<br /><span className="text-xs text-gray-400 font-normal">Who?</span></div>
                        <div className="text-gray-300">→</div>
                        <div className="text-brand-magenta">Verb<br /><span className="text-xs text-gray-400 font-normal">Does?</span></div>
                        <div className="text-gray-300">→</div>
                        <div className="text-brand-magenta">Object<br /><span className="text-xs text-gray-400 font-normal">What?</span></div>
                    </div>
                </div>

                {/* Rule 1: No Be Verb */}
                <section>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                        Ditch the 'Be' Verb
                    </h3>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 text-sm">
                        <div className="mb-3 pb-3 border-b border-gray-100">
                            <p className="text-red-400 line-through decoration-red-400 mb-1">My hobby is gardening.</p>
                            <p className="text-xs text-gray-400">Static & Boring 👎</p>
                        </div>
                        <div>
                            <p className="text-green-600 font-bold mb-1">I like gardening.</p>
                            <p className="text-xs text-gray-400">Active & Clear 👍</p>
                        </div>
                    </div>
                </section>

                {/* Rule 2: Subject is Me */}
                <section>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                        Start with 'I' or People
                    </h3>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 text-sm">
                        <p className="text-gray-600 mb-3">
                            Avoid using things as subjects. When you start with "I", finding the right verb becomes much easier.
                        </p>
                        <div className="bg-yellow-50 p-3 rounded-lg text-gray-700 italic">
                            "Simple English starts with ME."
                        </div>
                    </div>
                </section>

                {/* Rule 3: Power Verbs */}
                <section>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                        Use Power Verbs
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                        {['have', 'find', 'enjoy', 'use'].map(verb => (
                            <li key={verb} className="bg-white border border-gray-200 py-3 text-center rounded-xl font-bold text-brand-magenta">
                                {verb}
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </div>
    );
}
