import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Mail, Settings } from 'lucide-react';

const Layout = ({ children }) => {
  const navigationItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '#' },
    { icon: Mail, label: 'Contact', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content area */}
      <main className="relative z-10 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mb-4 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
          <div className="flex items-center justify-around py-3 px-2">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 hover:bg-white/20 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <item.icon 
                  size={20} 
                  className="text-white/80 group-hover:text-white transition-colors duration-300 mb-1" 
                />
                <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Header overlay for glassmorphism effect */}
      <div className="fixed top-0 left-0 right-0 z-40 h-20 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"></div>
    </div>
  );
};

export default Layout;