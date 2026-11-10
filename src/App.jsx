import CodeBox from './components/CodeBox.jsx'
import exp5 from './snippets/EXP5.txt?raw'
import exp6 from './snippets/EXP6.txt?raw'
import exp8 from './snippets/EXP8.txt?raw'
import exp10 from './snippets/EXP10.txt?raw'

const experiments = [
  { id: 'EXP5', code: exp5, accent: '#2dd4bf', file: 'src/snippets/EXP5.txt' },
  { id: 'EXP6', code: exp6, accent: '#818cf8', file: 'src/snippets/EXP6.txt' },
  { id: 'EXP8', code: exp8, accent: '#fbbf24', file: 'src/snippets/EXP8.txt' },
  { id: 'EXP10', code: exp10, accent: '#fb7185', file: 'src/snippets/EXP10.txt' },
]

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="brand">
          <div className="brand__mark" aria-hidden="true">
            <span>&lt;/&gt;</span>
          </div>
          <div>
            <h1>cnexam</h1>
            <p>Experiment code viewer</p>
          </div>
        </div>

        <div className="app__meta">
          <span className="app__meta-dot" aria-hidden="true" />
          <span>{experiments.length} snippets loaded</span>
        </div>
      </header>

      <main className="grid">
        {experiments.map((experiment) => (
          <CodeBox
            key={experiment.id}
            id={experiment.id}
            accent={experiment.accent}
            fileName={experiment.file}
            code={experiment.code}
          />
        ))}
      </main>

      <footer className="app__footer">
        <span>
          Paste code into <code>src/snippets/EXP5.txt</code>, <code>EXP6.txt</code>,{' '}
          <code>EXP8.txt</code> or <code>EXP10.txt</code>
        </span>
        <span className="app__footer-hint">Indentation preserved as written</span>
      </footer>
    </div>
  )
}
