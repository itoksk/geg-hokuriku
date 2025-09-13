import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Users, Target, Trophy, CheckCircle } from 'lucide-react'

const Workshop = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const challenges = [
    {
      id: 'A',
      title: 'Gemini課題：教育支援ツール',
      description: '学校現場で使える実用的なツールを作成',
      examples: ['出席管理システム', '授業タイマー', '成績計算ツール', '座席表ジェネレーター'],
      requirements: ['機能は2つまで', 'デザインのコツを実践', 'Google Sites埋め込み対応', 'スマホ対応'],
      color: 'bg-cyan-400',
      textColor: 'text-cyan-600',
      bgLight: 'bg-cyan-50'
    },
    {
      id: 'B',
      title: 'AI Studio Build課題：インタラクティブ教材',
      description: '授業で使える視覚的な教材を作成',
      examples: ['化学元素周期表', '歴史年表タイムライン', '数学公式計算機', '地理クイズゲーム'],
      requirements: ['ビジュアル重視', 'インタラクティブ', 'アニメーション含む', '瞬間生成を活用'],
      color: 'bg-violet-400',
      textColor: 'text-violet-600',
      bgLight: 'bg-violet-50'
    }
  ]

  const timeline = [
    { icon: <Users />, title: 'イントロ＆セットアップ', desc: 'ツールの準備、アカウント確認' },
    { icon: <Target />, title: 'Geminiワーク', desc: 'プロンプト作成→生成→改善→埋め込み' },
    { icon: <Trophy />, title: 'AI Studio Buildワーク', desc: 'Build機能でプロトタイプ作成' },
    { icon: <Clock />, title: '発表＆振り返り', desc: '成果物の共有、学びの共有' }
  ]

  return (
    <section id="workshop" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            実践<span className="gradient-text">ワークショップ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            2つのツールを使い分けて最適な開発を体験
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">ワークショップタイムライン</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <div className="p-2 bg-electric/10 text-electric rounded-lg">
                          {item.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'text-right' : ''}>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenges */}
        <div className="grid lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className={`${challenge.color} p-8 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold">{challenge.id}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                    <p className="opacity-90">{challenge.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">課題例</h4>
                    <ul className="space-y-2">
                      {challenge.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">要件</h4>
                    <ul className="space-y-2">
                      {challenge.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`mt-6 p-4 ${challenge.bgLight} rounded-xl`}>
                  <p className={`text-sm font-medium ${challenge.textColor}`}>
                    成果物：{challenge.id === 'A' ? 'Google Sitesに埋め込まれた実用ツール' : 'すぐに授業で使えるインタラクティブ教材'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workshop