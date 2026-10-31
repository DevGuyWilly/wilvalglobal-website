import { Link } from 'react-router-dom';
import { usePageTitle } from '../usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="page-hero">
      <div className="wrap stack" style={{ gap: 20, maxWidth: 'calc(720px + 2 * var(--gutter))' }}>
        <p className="eyebrow">404</p>
        <h1 className="display display--l">We couldn&apos;t find that page.</h1>
        <p className="lead muted">It may have moved. Try one of these instead.</p>
        <div className="row">
          <Link className="btn btn--primary" to="/">Go to the home page</Link>
          <Link className="btn btn--leaf" to="/sell">Sell your waste</Link>
          <Link className="btn btn--outline" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
