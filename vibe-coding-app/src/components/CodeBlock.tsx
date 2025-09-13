import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

const CodeBlock = ({ code, language = 'javascript', showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          padding: '1rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition-colors opacity-0 group-hover:opacity-100 shadow-lg border border-gray-600"
      >
        {copied ? (
          <>
            <Check size={14} className="inline mr-1" />
            Copied!
          </>
        ) : (
          <>
            <Copy size={14} className="inline mr-1" />
            Copy
          </>
        )}
      </button>
    </div>
  )
}

export default CodeBlock