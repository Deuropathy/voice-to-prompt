import { Link } from 'react-router-dom'

const modules = [
  {
    title: '项目案例',
    description: '查看我的代表项目与成果。',
    to: '/projects',
    icon: '/czp/icons/projects.png',
    iconAlt: '项目案例图标',
  },
  {
    title: 'Agent 案例',
    description: '探索我的智能体与流程工具。',
    to: '/agents',
    icon: '/czp/icons/agents.png',
    iconAlt: 'Agent 案例图标',
  },
  {
    title: '好用工具',
    description: '效率工具与资源整理。',
    to: '/ai-tools',
    icon: '/czp/icons/tools.png',
    iconAlt: '好用工具图标',
  },
]

function Home() {
  return (
    <section className="home">
      <header className="home-intro">
        <img className="home-avatar" src="/czp/profile.jpg" alt="蔡展鹏" />
        <div className="home-info">
          <p className="home-label">个人介绍</p>
          <h2>蔡展鹏</h2>
          <div className="home-meta">
            <div className="home-meta-row">
              <span className="home-meta-item">
                <span className="home-meta-label">年龄</span>
                <span className="home-meta-value">24</span>
              </span>
              <span className="home-meta-item">
                <span className="home-meta-label">目前状态</span>
                <span className="home-meta-value">深圳大学研二在读</span>
              </span>
            </div>
            <div className="home-meta-row">
              <span className="home-meta-item">
                <span className="home-meta-label">电话</span>
                <span className="home-meta-value">15820768984</span>
              </span>
              <span className="home-meta-item">
                <span className="home-meta-label">邮箱</span>
                <span className="home-meta-value">1464945456@qq.com</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="home-modules">
        {modules.map((module) => (
          <Link key={module.title} to={module.to} className="module-card">
            <div className="module-content">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </div>
            <div className="module-icon">
              <img src={module.icon} alt={module.iconAlt} />
            </div>
            <span className="module-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
