import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Heart, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSparkle = () => {
    setSparkleCount(prev => prev + 1);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        className="relative z-10"
      >
        <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl p-8 max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Hello World!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-xl text-white/90 mb-4">
              Welcome to my world
            </p>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <Heart className="w-4 h-4 mr-2 text-pink-300" />
              I'm Adnan
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-white/80 text-sm">
              Creating beautiful experiences with code
            </p>

            <Button
              onClick={handleSparkle}
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2" />
              Add Some Magic ✨
            </Button>

            {sparkleCount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-white/70 text-sm"
              >
                Magic count: {sparkleCount}
              </motion.div>
            )}
          </motion.div>
        </Card>

        {/* Floating animation elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400/30 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400/30 rounded-full blur-sm"
        />
      </motion.div>
    </div>
  );
}
