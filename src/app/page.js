'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleNotify = () => {
    setShowNotification(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-px bg-white"
            />
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-4"
          >
            <div className="animated-background" aria-hidden="true" />
            <div className="radial-blur" aria-hidden="true" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 left-8"
            >
              <h2 className="font-light tracking-widest text-sm">LAUNCHING SOON</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-7xl font-bold leading-tight"
              >
                Something
                <span className="block mt-2 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto"
              >
                We're crafting something special. Join our waitlist to be the first to
                experience it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:border-white/20 outline-none w-full sm:w-80 backdrop-blur-sm transition-colors"
                  />
                </div>
                <button 
                  onClick={handleNotify}
                  className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Notify Me
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40"
            >
              <div className="flex items-center gap-1">
                <p>© 2025 KynexLabs</p>
                <span className="mx-2">•</span>
                <p>Made with ♥ by <a 
                  href="https://discord.com/users/969258536557244537" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors underline underline-offset-4"
                >NighT</a>
                </p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Discord</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
                <a href="#" className="hover:text-white transition-colors">Trustpilot</a>
              </div>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNotification && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotification(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-[90%] max-w-md bg-white mx-auto p-8 rounded-3xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowNotification(false)}
                  className="absolute top-6 right-6 text-black/40 hover:text-black/60 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
                
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-black">Coming Soon!</h3>
                    <p className="text-black/60 text-lg">
                      Our notification system is currently under development. We're working hard to bring you the best experience possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowNotification(false)}
                    className="mt-2 px-8 py-3.5 rounded-full bg-black text-white font-medium hover:bg-black/90 transition-colors w-full"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
