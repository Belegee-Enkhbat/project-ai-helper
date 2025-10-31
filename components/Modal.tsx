import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="p-0.5 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div
          ref={modalRef}
          className="relative w-full max-w-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 transform transition-all modal-enter modal-enter-active"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <div className="flex items-start justify-between p-5 border-b border-slate-200 dark:border-slate-700/50 rounded-t-xl">
            <h2 id="modal-title" className="text-xl font-semibold text-slate-900 dark:text-white">
              {title}
            </h2>
            <button
              type="button"
              className="text-slate-400 bg-transparent hover:bg-slate-200/70 dark:hover:bg-slate-700/70 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;