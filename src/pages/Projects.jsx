const projects = ['项目案例 01', '项目案例 02', '项目案例 03', '项目案例 04', '项目案例 05', '项目案例 06']

function Projects() {
  return (
    <section className="module-page">
      <header className="module-header">
        <h2>项目案例</h2>
      </header>
      <div className="module-grid">
        {projects.map((name) => (
          <button key={name} className="module-button" type="button">
            {name}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Projects
