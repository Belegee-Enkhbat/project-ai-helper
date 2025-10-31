import React, { useState, useCallback } from 'react';
import Modal from './components/Modal';
import Spinner from './components/Spinner';

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const projectDescription = `Purpose
  Provide a single place to run an AI-enabled social analytics and management platform:
  Integration points for modern LLMs and image generation models for features like chat, content generation, agents, and embeddings.
  what the code implements
  Scheduled batch ingestion with Python Dockerized jobs
  BigQuery ingestion and analytics, plus embedding generation and insertion.
  Frontend: Nuxt 3 app with components for chat, dashboards, social features, and settings.`;

  const handleSearch = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2000);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 antialiased bg-gradient-to-br from-gray-50 to-gray-200 dark:from-slate-900 dark:to-slate-950">
      <header className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
            Intelligent Project Search
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Leverage AI to find projects with matching features and descriptions instantly.
          </p>
        </div>
      </header>

      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-1 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <label htmlFor="project-description" className="block text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Project Description & Features
                </label>
                <textarea
                  id="project-description"
                  rows={6}
                  className="block w-full text-base bg-slate-100/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-700 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out cursor-default text-slate-600 dark:text-slate-400 p-4 font-mono"
                  readOnly
                  value={projectDescription}
                />
              </div>
              <div className="px-6 sm:px-8 py-4 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-700/50">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    {isLoading ? (
                      <>
                        <Spinner />
                        Searching...
                      </>
                    ) : (
                      <>
                        <SearchIcon />
                        Search
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="AI Analysis Complete">
        <div className="space-y-6">
          <dl className="space-y-4">
            <div>
              <dt className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Similar Projects</dt>
              <dd className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">Project Ai helper: Streamed real-time social data with Kafka, processed and clustered trends with Spark and fastText, then displayed analytics in a React dashboard.</dd>
            </div>
             <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <dt className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Recommended developer</dt>
              <dd className="mt-2 text-slate-700 dark:text-slate-300">
                 Puka:
                 The system analyzes the search input using LLMs, and then performs a high-accuracy vectorized search across the ingested data. It efficiently retrieves Puka"s developer profile—highlighting his experience extracted from project codes and commit history—by matching the user"s requirements to Puka"s skills and project involvement stored in the vector database.
              </dd>
            </div>
             <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <dt className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Recommended tech tools</dt>
              <dd className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                OpenAI GPT-4 – State-of-the-art large language model for content creation, chat, and semantic analysis tasks.
              </dd>
               <dd className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
Hugging Face Transformers – Popular open-source library supporting a wide range of pre-trained NLP models for embedding, classification, and generation.


               </dd>
                <dd className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
BigQuery – Google’s cloud data warehouse, essential for large-scale analytics and ML model integration.

               </dd>
            </div>
          </dl>
        </div>
      </Modal>
    </div>
  );
};

export default App;