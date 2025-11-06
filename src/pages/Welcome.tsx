import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';

const Welcome = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const initializeProfile = useGameStore((state) => state.initializeProfile);

  const handleStart = () => {
    if (name.trim()) {
      initializeProfile(name.trim());
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card max-w-md w-full text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="text-8xl mb-6"
        >
          🎮
        </motion.div>
        
        <h1 className="text-4xl font-bold text-primary-600 mb-2">
          수학 모험 게임
        </h1>
        
        <p className="text-gray-600 mb-8">
          곱셈과 나눗셈을 재미있게 배워요!
        </p>
        
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
            이름을 입력해주세요
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            placeholder="홍길동"
            className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-primary-500 transition-colors"
            maxLength={10}
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          disabled={!name.trim()}
          className="btn-primary w-full text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          시작하기 🚀
        </motion.button>
        
        <div className="mt-8 flex justify-center gap-4 text-4xl">
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>
            ✖️
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>
            ➗
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>
            🎯
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}>
            ⭐
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;


