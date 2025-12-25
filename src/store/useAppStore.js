import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(
    persist(
        (set) => ({
            completedScenarios: [], // Array of scenario IDs
            savedSentences: [], // Array of saved specific sentence objects

            markScenarioComplete: (id) => set((state) => ({
                completedScenarios: [...new Set([...state.completedScenarios, id])]
            })),

            saveSentence: (sentence) => set((state) => ({
                savedSentences: [...state.savedSentences, sentence]
            })),

            removeSentence: (id) => set((state) => ({
                savedSentences: state.savedSentences.filter(s => s.id !== id)
            })),
        }),
        {
            name: 'simple-english-storage',
        }
    )
);
