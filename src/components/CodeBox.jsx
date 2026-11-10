import { useEffect, useRef, useState } from 'react'

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="m4 12 5 5L20 6" />
    </svg>
  )
}

export default function CodeBox({ id, accent, fileName, code }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const lines = code.replace(/\n$/, '').split('\n')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="code-box" style={{ '--accent': accent }}>
      <header className="code-box__header">
        <div className="code-box__title">
          <span className="code-box__dot" aria-hidden="true" />
          <h2>{id}</h2>
        </div>
        <div className="code-box__actions">
          <span className="code-box__file" title={fileName}>
            {fileName.split('/').pop()}
          </span>
          <button
            type="button"
            className={`copy-btn${copied ? ' copy-btn--done' : ''}`}
            onClick={handleCopy}
            aria-label={copied ? `Copied ${id} code` : `Copy ${id} code`}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </header>

      <div className="code-box__viewport">
        <div className="code-box__inner">
          {lines.map((line, index) => (
            <div className="code-line" key={index}>
              <span className="code-line__number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="code-line__text">{line === '' ? '\u00a0' : line}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="code-box__footer">
        <span>{lines.length} lines</span>
        <span className="code-box__footer-dot" aria-hidden="true" />
        <span>UTF-8</span>
      </footer>
    </section>
  )
}
