import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, Radio, Hammer, Image, Zap, Code, Eye } from 'lucide-react'

const AIStudioSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Chat',
      description: '対話形式でコード生成',
      details: '段階的な改善や複雑なロジック構築に最適',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Stream',
      description: 'リアルタイムストリーミング',
      details: '長文生成や連続的な出力に対応',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Build',
      description: '瞬間アプリ生成',
      details: 'プロンプト一つで完全なWebアプリを数秒で作成',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Create Media',
      description: '画像生成機能',
      details: 'UIデザインやアイコン、教材用画像の作成',
      gradient: 'from-orange-400 to-orange-600'
    }
  ]

  const buildSteps = [
    { icon: <Zap />, title: 'アクセス', desc: 'aistudio.google.comにログイン' },
    { icon: <Code />, title: 'プロンプト入力', desc: '作りたいアプリを自然言語で説明' },
    { icon: <Eye />, title: '生成&編集', desc: 'リアルタイムプレビューで確認しながら編集' },
    { icon: <MessageSquare />, title: '共有', desc: 'リンク生成やHTMLダウンロード' }
  ]

  return (
    <section id="ai-studio" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Google AI Studio<span className="gradient-text">全機能</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4つの強力な機能で開発を加速
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                style={{ background: `linear-gradient(to bottom right, ${feature.gradient})` }}
              />
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-electric/30 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="font-medium text-gray-700 mb-2">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Build Feature Workflow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-electric/10 via-violet/10 to-coral/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Build機能ワークフロー</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {buildSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg text-electric mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 p-6 bg-white/80 backdrop-blur rounded-xl text-center"
          >
            <p className="text-lg font-medium mb-4">
              効果的なBuildプロンプト例
            </p>
            <div className="max-w-2xl mx-auto p-4 bg-gray-900 text-green-400 rounded-lg font-mono text-sm text-left">
              「インタラクティブな周期表を作ってください。<br />
              各元素をクリックすると詳細情報がポップアップで表示。<br />
              3Dアニメーション効果付き。<br />
              モダンで教育的なデザイン。」
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIStudioSection