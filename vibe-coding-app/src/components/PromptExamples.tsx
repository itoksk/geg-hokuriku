import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Layers, RefreshCw, Rocket } from 'lucide-react'
import CodeBlock from './CodeBlock'

const PromptExamples = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const examples = [
    {
      title: '基本テンプレート',
      icon: <FileText className="w-6 h-6" />,
      code: `「[対象ユーザー]向けの[アプリの種類]を作成してください。

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
    },
    {
      title: '段階的改善プロンプト',
      icon: <Layers className="w-6 h-6" />,
      code: `第1段階：「基本機能だけ実装してください」
第2段階：「デザインをもっとモダンに改善してください」
第3段階：「アニメーションを追加してください」
第4段階：「レスポンシブ対応してください」`
    },
    {
      title: 'Build機能用プロンプト',
      icon: <Rocket className="w-6 h-6" />,
      code: `「インタラクティブな周期表を作ってください。
各元素をクリックすると詳細情報がポップアップで表示。
3Dアニメーション効果付き。
モダンで教育的なデザイン。」`
    },
    {
      title: '反復改善プロンプト',
      icon: <RefreshCw className="w-6 h-6" />,
      code: `「さっきのコードをベースに、以下を追加してください：
- データの保存機能（localStorage使用）
- CSVエクスポート機能
- 印刷用スタイル
- アクセシビリティ対応（ARIA属性）」`
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-violet-50 to-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            実践<span className="text-violet">プロンプト集</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            すぐに使える効果的なプロンプトテンプレート
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-violet/10 text-violet rounded-xl">
                    {example.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{example.title}</h3>
                </div>
                <CodeBlock code={example.code} language="text" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            <RefreshCw className="inline mr-2" />
            プロンプトのコツ
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-4 rounded-xl">
              <h4 className="font-bold text-violet mb-2">具体的に</h4>
              <p className="text-sm text-gray-700">
                「いい感じに」ではなく「Tailwindでモダンなカードデザイン」
              </p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <h4 className="font-bold text-purple-600 mb-2">段階的に</h4>
              <p className="text-sm text-gray-700">
                一度に全部ではなく、少しずつ機能を追加
              </p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <h4 className="font-bold text-indigo-600 mb-2">制約を明確に</h4>
              <p className="text-sm text-gray-700">
                「1ファイル」「CDNのみ」など技術的制約を明示
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PromptExamples