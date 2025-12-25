import React from 'react';
import { Home, BookOpen, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
    const location = useLocation();
    const isIntro = location.pathname === '/';

    if (isIntro) return <div className="min-h-screen bg-brand-yellow font-sans">{children}</div>;

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative pb-20">

                {/* Header (Hidden on specific pages if needed, but keeping simple) */}
                {!location.pathname.includes('/chapter') && (
                    <header className="px-6 py-5 bg-white border-b border-gray-100">
                        <h1 className="text-xl font-extrabold tracking-tight">Simple English 3</h1>
                    </header>
                )}

                <main className="">
                    {children}
                </main>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 flex justify-around p-3 pb-6 z-50 text-gray-400">
                    <Link to="/home" className={`flex flex-col items-center transition-colors ${location.pathname === '/home' ? 'text-black' : 'hover:text-gray-600'}`}>
                        <Home size={24} strokeWidth={2.5} />
                        <span className="text-[10px] font-bold mt-1">HOME</span>
                    </Link>
                    <Link to="/my-deck" className={`flex flex-col items-center transition-colors ${location.pathname === '/my-deck' ? 'text-black' : 'hover:text-gray-600'}`}>
                        <Layers size={24} strokeWidth={2.5} />
                        <span className="text-[10px] font-bold mt-1">MY DECK</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
