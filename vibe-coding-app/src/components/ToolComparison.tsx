import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X, Circle, Triangle } from 'lucide-react'

const ToolComparison = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const tools = ['Claude', 'ChatGPT', 'Gemini', 'Google AI Studio']
  
  const features = [
    {
      name: 'コード生成',
      scores: ['excellent', 'excellent', 'excellent', 'excellent'],
      details: ['高精度', '高精度', '高精度', 'Build機能で瞬間生成']
    },
    {
      name: '画像生成',
      scores: ['none', 'excellent', 'excellent', 'excellent'],
      details: ['非対応', 'DALL-E 3', 'Imagen', 'Create Media']
    },
    {
      name: 'リアルタイム検索',
      scores: ['none', 'good', 'excellent', 'excellent'],
      details: ['非対応', 'Web Browsing', 'Google検索統合', 'Google検索統合']
    },
    {
      name: 'ファイル解析',
      scores: ['excellent', 'excellent', 'excellent', 'good'],
      details: ['多形式対応', '多形式対応', 'Google Drive連携', '基本的な対応']
    },
    {
      name: '音声対話',
      scores: ['good', 'excellent', 'good', 'limited'],
      details: ['音声モード(ベータ・英語)', '音声モード', 'モバイルアプリ', '限定的']
    },
    {
      name: 'カスタムGPT/Gem',
      scores: ['none', 'excellent', 'excellent', 'none'],
      details: ['非対応', 'GPTs', 'Gems', '非対応']
    },
    {
      name: 'API提供',
      scores: ['excellent', 'excellent', 'excellent', 'excellent'],
      details: ['Anthropic API', 'OpenAI API', 'Gemini API', '統合API']
    },
    {
      name: '無料利用',
      scores: ['good', 'good', 'excellent', 'excellent'],
      details: ['制限あり', '制限あり', '寛容な制限', '開発者向け無料枠']
    }
  ]

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'excellent':
        return <div className="text-green-500"><Check className="w-5 h-5" /></div>
      case 'good':
        return <div className="text-yellow-500"><Circle className="w-5 h-5" /></div>
      case 'limited':
        return <div className="text-orange-500"><Triangle className="w-5 h-5" /></div>
      case 'none':
        return <div className="text-red-500"><X className="w-5 h-5" /></div>
      default:
        return null
    }
  }

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'excellent': return 'bg-green-50 text-green-700'
      case 'good': return 'bg-yellow-50 text-yellow-700'
      case 'limited': return 'bg-orange-50 text-orange-700'
      case 'none': return 'bg-red-50 text-red-700'
      default: return 'bg-gray-50'
    }
  }

  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            AIツール<span className="gradient-text">詳細比較</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            各AIツールの特徴・機能・設定を理解する
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px] bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-electric to-violet text-white">
                  <th className="p-4 text-left font-bold">機能</th>
                  {tools.map((tool) => (
                    <th key={tool} className="p-4 text-center font-bold">{tool}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-medium">{feature.name}</td>
                    {feature.scores.map((score, i) => (
                      <td key={i} className="p-4">
                        <div className={`flex flex-col items-center justify-center rounded-lg p-2 ${getScoreColor(score)}`}>
                          {getScoreIcon(score)}
                          <span className="text-xs mt-1">{feature.details[i]}</span>
                        </div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend and Recommendations */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <h3 className="font-bold mb-4">凡例</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>優秀</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-5 h-5 text-yellow-500" />
                <span>対応</span>
              </div>
              <div className="flex items-center gap-3">
                <Triangle className="w-5 h-5 text-orange-500" />
                <span>限定的</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-500" />
                <span>非対応</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-electric/10 to-violet/10 rounded-xl p-6"
          >
            <h3 className="font-bold mb-4">バイブコーディングに最適なツール</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-electric">1.</span>
                <div>
                  <strong>Gemini 2.0 + Google AI Studio Build</strong>
                  <p className="text-sm text-gray-600">段階的な開発とプロトタイピングの組み合わせ</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-violet">2.</span>
                <div>
                  <strong>ChatGPT 4.5（画像生成が必要な場合）</strong>
                  <p className="text-sm text-gray-600">UIデザインやアイコン作成を含む開発</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-coral">3.</span>
                <div>
                  <strong>Claude 3.7 Sonnet（複雑なロジック）</strong>
                  <p className="text-sm text-gray-600">高度なコード生成と詳細な説明が必要な場合</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Latest Updates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-electric" />
            2025年最新アップデート情報
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-gray-700">最新モデル</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Claude 3.7 Sonnet Pro</strong> - 音声対話ベータ版追加</li>
                <li>• <strong>GPT-4.5</strong> - マルチモーダル機能強化</li>
                <li>• <strong>Gemini 2.0</strong> - Google検索統合改善</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-gray-700">料金プラン</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Claude Pro: $20/月（制限緩和）</li>
                <li>• ChatGPT Plus: $20/月（GPT-4.5フル機能）</li>
                <li>• Gemini Advanced: $19.99/月（2TB容量付き）</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 各AIツールは頻繁にアップデートされるため、最新情報は公式サイトをご確認ください
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolComparison