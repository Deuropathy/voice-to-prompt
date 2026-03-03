import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'About', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Agents', to: '/agents' },
  { label: 'AI Tools', to: '/ai-tools' },
]

function SiteLayout() {
  return (
    <div className="site">
      <main className="site-main">
        <Outlet />
      </main>

    </div>
  )
}

export default SiteLayout
