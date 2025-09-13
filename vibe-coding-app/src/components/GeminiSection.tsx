import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, FileCode, Globe, Lock } from 'lucide-react'
import CodeBlock from './CodeBlock'

const GeminiSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const promptTemplate = `「[対象ユーザー]向けの[アプリの種類]を作成してください。

【必要な機能】
1. [機能1]
2. [機能2]

【デザイン要件】
- Tailwind CSS CDNを使用
- [色やスタイルの希望]
- スマホでも見やすく

【技術要件】
- 1つのHTMLファイルで完結
- Google Sitesに埋め込み可能
- 外部ライブラリは最小限」`

  const features = [
    { icon: <FileCode />, title: '段階的改善', description: '基本機能から始めて徐々に改善' },
    { icon: <Globe />, title: 'Google Sites連携', description: '簡単に埋め込み・共有可能' },
    { icon: <Lock />, title: '権限管理', description: '限定公開から一般公開まで柔軟に' },
    { icon: <Sparkles />, title: 'カスタムGem', description: '専用の指示で効率化' }
  ]

  return (
    <section id="gemini" className="section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Gemini<span className="gradient-text">実践ガイド</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            段階的な開発とGoogle Sites連携で実用的なツールを作成
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Prompt Template */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">基本プロンプトテンプレート</h3>
            <CodeBlock code={promptTemplate} language="text" showLineNumbers />
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-gray-700">
                <strong className="text-blue-700">ポイント：</strong>
                要件を明確に構造化することで、AIが理解しやすくなります
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-electric mb-3">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Workflow Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">段階的改善プロンプト</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, label: '基本機能', desc: '最小限の機能で動作確認' },
              { step: 2, label: 'デザイン改善', desc: 'UIをモダンに改善' },
              { step: 3, label: 'アニメーション', desc: '動きを追加して魅力的に' },
              { step: 4, label: 'レスポンシブ', desc: 'あらゆるデバイスに対応' }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-gradient-to-br from-electric to-violet text-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{item.step}</div>
                  <div className="font-bold mb-1">{item.label}</div>
                  <div className="text-xs opacity-90">{item.desc}</div>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeminiSection