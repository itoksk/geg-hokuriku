import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, XCircle, Lightbulb, MessageSquare } from 'lucide-react'
import CodeBlock from './CodeBlock'

const TipsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const tips = [
    {
      title: 'AIに「ヒアリング」させる',
      icon: <MessageSquare className="w-6 h-6" />,
      bad: '「血液シミュレーターを作って」',
      good: '「中学校の保健の授業で血液成分を教えるためのツールを作りたいです。他に要件をまとめるために、私にヒアリングをしてください。」',
      point: 'AIに質問させることで、自分でも気づかなかった要件が明確になります'
    },
    {
      title: 'MVP思考：機能は2つまで',
      icon: <Lightbulb className="w-6 h-6" />,
      bad: '「生徒管理も、成績管理も、連絡帳も、時間割も...」→ 完成しない',
      good: '「血液成分の動きを見る」「クリックで説明表示」→ 60分で完成！',
      point: '機能を絞ることで、確実に動くものを素早く作れます'
    }
  ]

  return (
    <section id="tips" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            実践的な<span className="gradient-text">コツとテクニック</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            バイブコーディングで成功するための具体的なテクニック
          </p>
        </motion.div>

        <div className="space-y-12">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-electric/10 text-electric rounded-xl">
                    {tip.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{tip.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <span className="font-bold text-red-700">悪い例</span>
                      </div>
                      <CodeBlock code={tip.bad} language="text" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-green-700">良い例</span>
                      </div>
                      <CodeBlock code={tip.good} language="text" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg"
                >
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <span className="font-bold text-blue-700">ポイント：</span>
                      <span className="text-gray-700">{tip.point}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TipsSection