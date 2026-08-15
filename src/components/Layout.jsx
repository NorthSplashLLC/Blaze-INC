import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/programs', 'Programs'],
  ['/impact', 'Impact'],
  ['/get-involved', 'Get Involved'],
  ['/contact', 'Contact'],
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Link to="/" className="brand" aria-label="B.L.A.Z.E. Incorporated home">
            <img src="/assets/blaze-logo.jpeg" alt="B.L.A.Z.E. Incorporated logo" />
            <span>
              <strong>B.L.A.Z.E.</strong>
              <small>INCORPORATED LLC</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
            ))}
          </nav>

          <Link className="nav-cta desktop-only" to="/get-involved">
            Join the movement <ArrowUpRight size={16} />
          </Link>

          <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mobile-menu">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
            <Link to="/get-involved" className="nav-cta">Join the movement <ArrowUpRight size={16} /></Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <img src="/assets/blaze-logo.jpeg" alt="" />
              <div>
                <strong>B.L.A.Z.E.</strong>
                <span>Black Leaders Advocating for Zealous Equity</span>
              </div>
            </div>
            <p>Creating pathways to education, leadership, opportunity and stronger communities across Northeast Ohio.</p>
          </div>

          <div>
            <h4>Explore</h4>
            {links.slice(1).map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
          </div>

          <div>
            <h4>Connect</h4>
            <a href="https://www.instagram.com/b.l.a.z.e_foundation/" target="_blank" rel="noreferrer"><Instagram size={16}/> @b.l.a.z.e_foundation</a>
            <a href="mailto:blazefoundation.4success@gmail.com"><Mail size={16}/> Email B.L.A.Z.E.</a>
            <span className="footer-line"><MapPin size={16}/> Akron & Summit County, Ohio</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} B.L.A.Z.E. Incorporated LLC</span>
          <span>Built to help youth lead, learn and thrive.</span>
        </div>
      </footer>
    </div>
  )
}
