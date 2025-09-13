import { motion } from 'framer-motion'
import { ArrowDown, Zap, Target, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-violet/10 to-coral/10 animate-gradient bg-[length:400%_400%]" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-electric/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">バイブコーディング</span>
            <br />
            <span className="text-3xl md:text-5xl">完全マスター講座</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AIと協働する新時代の開発手法を完全習得
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#tips"
                className="px-8 py-4 bg-electric text-white font-bold rounded-full hover:bg-electric/90 transition-colors shadow-lg flex items-center gap-2"
              >
                <Zap size={20} />
                今すぐ始める
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#workshop"
                className="px-8 py-4 bg-white border-2 border-ink font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                ワークショップを見る
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Target className="w-8 h-8 text-electric mx-auto mb-2" />
              <div className="text-3xl font-bold">2つ</div>
              <div className="text-sm text-gray-600">機能に絞る</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Zap className="w-8 h-8 text-coral mx-auto mb-2" />
              <div className="text-3xl font-bold">60分</div>
              <div className="text-sm text-gray-600">で完成</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Users className="w-8 h-8 text-violet mx-auto mb-2" />
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-gray-600">実践的</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero