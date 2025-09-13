import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Rocket, BookOpen, Code2, Sparkles } from 'lucide-react'

interface HeaderProps {
  scrollY: number
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const navItems = [
    { label: '特徴', href: '#features', icon: <Sparkles size={18} /> },
    { label: 'コツ', href: '#tips', icon: <Code2 size={18} /> },
    { label: 'デザイン', href: '#design', icon: <Sparkles size={18} /> },
    { label: 'Gemini', href: '#gemini', icon: <Rocket size={18} /> },
    { label: 'AI Studio', href: '#ai-studio', icon: <BookOpen size={18} /> },
    { label: 'ワークショップ', href: '#workshop', icon: <Code2 size={18} /> }
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Rocket className="w-8 h-8 text-electric" />
            <span className="font-display font-bold text-xl">
              Vibe<span className="text-electric">Coding</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm font-medium hover:text-electric transition-colors"
              >
                {item.icon}
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 py-3 text-sm font-medium hover:text-electric transition-colors"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header