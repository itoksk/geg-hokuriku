import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Palette, Type, Layers3, Sparkles } from 'lucide-react'
import CodeBlock from './CodeBlock'

const DesignTips = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const designTips = [
    {
      title: '絵文字をアイコンに置き換える',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'プロフェッショナルで統一感のあるデザインに',
      before: `<h1>📚 学習管理ツール</h1>`,
      after: `<h1><i class="material-icons">menu_book</i> 学習管理ツール</h1>`,
      color: 'text-violet',
      bgColor: 'bg-violet/10'
    },
    {
      title: 'タイポグラフィの改善',
      icon: <Type className="w-6 h-6" />,
      description: 'カスタムフォントとletter-spacingで印象的に',
      before: `font-family: sans-serif;`,
      after: `font-family: 'Space Grotesk', sans-serif;\nletter-spacing: 0.02em;\nfont-weight: 600;`,
      color: 'text-coral',
      bgColor: 'bg-coral/10'
    },
    {
      title: '影で立体感を演出',
      icon: <Layers3 className="w-6 h-6" />,
      description: 'box-shadowとhover効果で深みのあるUI',
      before: `border: 1px solid #ccc;`,
      after: `box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);\ntransition: all 0.3s ease;\n&:hover {\n  transform: translateY(-2px);\n  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);\n}`,
      color: 'text-electric',
      bgColor: 'bg-electric/10'
    }
  ]

  return (
    <section id="design" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            デザインが<span className="gradient-text">垢抜ける</span>コツ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AIっぽさを排除してプロフェッショナルなデザインを実現
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {designTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-electric/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${tip.bgColor} ${tip.color} mb-4`}>
                {tip.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600 mb-6">{tip.description}</p>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Before</span>
                  <div className="mt-2">
                    <CodeBlock code={tip.before} language="html" />
                  </div>
                </div>
                
                <div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">After</span>
                  <div className="mt-2">
                    <CodeBlock code={tip.after} language="css" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-violet/10 to-coral/10 rounded-2xl border-2 border-violet/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-6 h-6 text-violet" />
            <h3 className="text-xl font-bold">参考リソース</h3>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>• バイブコーディングで使える！デザインが垢抜けるコツ - フリーランスの学校</p>
            <p>• 影を使った立体感の演出テクニック - @rocomodesign</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DesignTips