import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { company, nav, rates, whatsappLink } from '../data/site';
import { LogoLockup } from './LogoLockup';
import { logos } from '../assets';
import { CloseIcon, MenuIcon } from './Icons';

/** Scrolls to top on route change, or to the #hash target when present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function TopBar() {
  const { pathname } = useLocation();
  const onSell = pathname === '/sell';
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <span>
          <span className="topbar__tag">SELLING WASTE IN JOS?</span>{' '}
          {onSell ? (
            <>
              Sachets <strong>₦{rates.sachet}/kg</strong> · Nylon <strong>₦{rates.nylon}/kg</strong>
            </>
          ) : (
            <>
              Sachets <strong>₦{rates.sachet}/kg</strong> · Nylon <strong>₦{rates.nylon}/kg</strong> ·{' '}
              <Link to="/sell">How to sell →</Link>
            </>
          )}
        </span>
        <span className="topbar__right">
          Partners worldwide: <strong>{company.email}</strong>
        </span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap header__inner">
        <LogoLockup />
        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to.startsWith('/#')}
              className={({ isActive }) => (isActive && !item.to.startsWith('/#') ? 'active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__actions">
          <NavLink to="/sell" className={({ isActive }) => `btn btn--sm btn--hide-sm ${isActive ? 'btn--dark' : 'btn--leaf'}`}>
            Sell your waste
          </NavLink>
          <NavLink to="/partner" className={({ isActive }) => `btn btn--sm ${isActive ? 'btn--dark' : 'btn--primary'}`}>
            Partner with us
          </NavLink>
          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Mobile">
        <ul>
          {[{ to: '/', label: 'Home' }, ...nav, { to: '/sell', label: 'Sell your waste' }, { to: '/partner', label: 'Partner with us' }].map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end className={({ isActive }) => (isActive ? 'active' : undefined)}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="wrap">
        <div className="footer__grid">
          <div className="stack-sm" style={{ gap: 16 }}>
            <span className="footer__plate"><img src={logos.globeLogoSmall} alt={company.name} width={88} height={88} /></span>
            <p className="slogan" style={{ fontSize: 18, lineHeight: '26px', color: 'var(--leaf)', maxWidth: '18em' }}>{company.slogan}</p>
          </div>
          <div>
            <h2>Sell waste locally</h2>
            <p>
              {company.address.line1}<br />{company.address.line2}<br />
              <span className="mono">{company.phones[0]}</span><br />
              <span className="mono">{company.phones[1]}</span>
            </p>
          </div>
          <div>
            <h2>Partner with us</h2>
            <p>
              {company.email}<br />
              WhatsApp <span className="mono">{company.phonesIntl[0]}</span><br />
              Time zone: {company.timezone}
            </p>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/polythene">Wilval Polythene</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={company.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.name} · Jos, Nigeria{company.rcNumber ? ` · RC ${company.rcNumber}` : ''}</span>
          <span>{company.domain}</span>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  const { pathname } = useLocation();
  if (pathname === '/partner') {
    return (
      <div className="mbar">
        <a className="btn btn--leaf" href={whatsappLink('Hello WilVal, I would like to discuss a partnership.')}>WhatsApp</a>
        <Link className="btn btn--primary" to="/partner#enquire">Send enquiry</Link>
      </div>
    );
  }
  return (
    <div className="mbar">
      <Link className="btn btn--leaf" to="/sell">Sell waste</Link>
      <Link className="btn btn--primary" to="/partner">Partner</Link>
    </div>
  );
}

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
