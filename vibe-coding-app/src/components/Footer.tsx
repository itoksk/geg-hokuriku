import { motion } from 'framer-motion'
import { Github, Twitter, Globe, BookOpen, ExternalLink } from 'lucide-react'

const Footer = () => {
  const resources = [
    { name: 'Gemini', url: 'https://gemini.google.com', icon: <Globe className="w-4 h-4" /> },
    { name: 'Google AI Studio', url: 'https://aistudio.google.com', icon: <Globe className="w-4 h-4" /> },
    { name: 'Google Sites', url: 'https://sites.google.com', icon: <Globe className="w-4 h-4" /> },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: <BookOpen className="w-4 h-4" /> }
  ]

  const learningResources = [
    'プロンプトエンジニアリング入門',
    'HTML/CSS/JS基礎',
    'レスポンシブデザイン',
    'アクセシビリティ対応'
  ]

  return (
    <footer className="bg-gradient-to-br from-ink to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-electric">ツールリンク</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-electric transition-colors"
                  >
                    {resource.icon}
                    {resource.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learning Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-violet">学習リソース</h3>
            <ul className="space-y-2">
              {learningResources.map((resource) => (
                <li key={resource} className="text-gray-300">
                  • {resource}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-coral">コミュニティ</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            最終更新：2025年1月 | Created with AI × Human Collaboration
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="px-3 py-1 bg-electric/20 text-electric rounded-full text-sm">
              速度優先
            </span>
            <span className="px-3 py-1 bg-violet/20 text-violet rounded-full text-sm">
              段階的改善
            </span>
            <span className="px-3 py-1 bg-coral/20 text-coral rounded-full text-sm">
              楽しさ重視
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer