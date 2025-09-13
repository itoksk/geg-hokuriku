import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Lock, Share2, Settings, Code, Users, Rocket } from 'lucide-react'

const GoogleSitesIntegration = () => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const steps = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'サイト作成',
      description: 'Google Sitesで新規サイトを作成',
      color: 'bg-blue-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '埋め込み',
      description: '埋め込み → 埋め込みコードを選択',
      color: 'bg-purple-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'コード貼付',
      description: '生成したHTMLコードを貼り付け',
      color: 'bg-indigo-500'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: '公開',
      description: 'サイズ調整して公開',
      color: 'bg-green-500'
    }
  ]

  const permissions = [
    {
      icon: <Lock />,
      title: '限定公開',
      description: '特定のユーザーのみアクセス可能',
      badge: '学校内限定'
    },
    {
      icon: <Share2 />,
      title: 'リンク共有',
      description: 'URLを知っている人がアクセス可能',
      badge: 'クラス共有'
    },
    {
      icon: <Globe />,
      title: '一般公開',
      description: '誰でもアクセス可能',
      badge: '公開教材'
    },
    {
      icon: <Users />,
      title: '共同編集',
      description: '複数の編集者を設定可能',
      badge: 'チーム開発'
    }
  ]

  const restrictions = [
    {
      title: 'navigator.clipboard制限',
      problem: 'クリップボード操作が制限される',
      solution: 'ユーザー操作イベント内で実行するか、代替UIを提供'
    },
    {
      title: 'localStorage制限',
      problem: '一部の環境でlocalStorageが使えない',
      solution: 'セッションストレージやCookieで代替'
    },
    {
      title: 'iframe内実行',
      problem: 'parent windowへのアクセス不可',
      solution: 'postMessageでの通信を検討'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-ink text-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Google Sites<span className="text-electric">埋め込み完全ガイド</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            作成したアプリをGoogle Sitesに統合する方法
          </p>
        </motion.div>

        {/* 埋め込み手順 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-electric">埋め込み手順</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-300">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 text-electric text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 共有権限 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-coral">共有権限の制御</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {permissions.map((perm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-electric mb-4">{perm.icon}</div>
                <h4 className="font-bold mb-2">{perm.title}</h4>
                <p className="text-sm text-gray-300 mb-3">{perm.description}</p>
                <span className="inline-block px-3 py-1 bg-electric/20 text-electric rounded-full text-xs">
                  {perm.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 制限事項と対策 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-coral">
            <Settings className="inline mr-2" />
            制限事項と対策
          </h3>
          <div className="space-y-6">
            {restrictions.map((restriction, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-4 items-center">
                <div className="font-bold text-orange-400">{restriction.title}</div>
                <div className="text-sm text-gray-300">
                  <span className="text-red-400">問題:</span> {restriction.problem}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-green-400">対策:</span> {restriction.solution}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 実践ワーク */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-electric/20 to-violet/20 rounded-2xl border border-electric/30"
        >
          <h3 className="text-2xl font-bold mb-4">
            <Rocket className="inline mr-2" />
            実践ワーク
          </h3>
          <p className="text-gray-300 mb-6">
            実際にGoogle Sitesにアプリを埋め込み、チーム内で共有設定を試してみましょう。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-bold text-electric mb-2">Step 1</h4>
              <p className="text-sm">簡単なツールを作成</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-bold text-violet mb-2">Step 2</h4>
              <p className="text-sm">Google Sitesに埋め込み</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-bold text-coral mb-2">Step 3</h4>
              <p className="text-sm">共有設定をテスト</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleSitesIntegration