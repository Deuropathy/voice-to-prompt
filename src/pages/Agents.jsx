import { Link } from 'react-router-dom'

const agents = [
  { label: '语音转文字', to: '/agents/voice-to-prompt' },
  { label: 'Agent 02', to: null },
  { label: 'Agent 03', to: null },
  { label: 'Agent 04', to: null },
  { label: 'Agent 05', to: null },
  { label: 'Agent 06', to: null },
]

function Agents() {
  return (
    <section className="module-page">
      <header className="module-header">
        <h2>Agent 案例</h2>
      </header>
      <div className="module-grid">
        {agents.map((agent) =>
          agent.to ? (
            <Link key={agent.label} to={agent.to} className="module-button">
              {agent.label}
            </Link>
          ) : (
            <button key={agent.label} className="module-button" type="button">
              {agent.label}
            </button>
          ),
        )}
      </div>
    </section>
  )
}

export default Agents
