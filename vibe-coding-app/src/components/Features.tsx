import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Layers, Palette, Users, Zap, Code } from 'lucide-react'

const features = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'MVP思考',
    description: '機能は2つまでに絞り、60分で完成を目指す',
    color: 'text-electric',
    bgColor: 'bg-electric/10'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: '段階的改善',
    description: '完璧より完成を優先し、徐々に改善していく',
    color: 'text-violet',
    bgColor: 'bg-violet/10'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'デザイン重視',
    description: 'AIっぽさを排除した親しみやすいUI',
    color: 'text-coral',
    bgColor: 'bg-coral/10'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '既存ツール活用',
    description: '車輪の再発明を避け、効率的に開発',
    color: 'text-lime',
    bgColor: 'bg-lime/10'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'エラーはAIに',
    description: 'エラーメッセージをそのままAIに投げて解決',
    color: 'text-sunset',
    bgColor: 'bg-sunset/10'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'ヒアリング重視',
    description: 'AIに質問させて要件を明確化',
    color: 'text-electric',
    bgColor: 'bg-electric/10'
  }
]

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            バイブコーディングの<span className="gradient-text">核心原則</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AIと協働して効率的に開発するための6つの重要な原則
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-electric/30 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} ${feature.color} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features