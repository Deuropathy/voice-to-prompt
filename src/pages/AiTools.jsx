const tools = ['好用工具 01', '好用工具 02', '好用工具 03', '好用工具 04', '好用工具 05', '好用工具 06']

function AiTools() {
  return (
    <section className="module-page">
      <header className="module-header">
        <h2>好用工具</h2>
      </header>
      <div className="module-grid">
        {tools.map((name) => (
          <button key={name} className="module-button" type="button">
            {name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default AiTools
