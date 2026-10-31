import { Link } from 'react-router-dom';
import { logos } from '../assets';
import { company } from '../data/site';

/** Header-size logo: the globe on a white plate, WILVAL in live type and the green panel. */
export function LogoLockup() {
  return (
    <Link to="/" className="lockup" aria-label={`${company.name}, home`}>
      <span className="lockup__plate"><img src={logos.globeLogoSmall} alt="" width={44} height={44} /></span>
      <span className="lockup__word">WILVAL</span>
      <span className="lockup__panel">Global<br />Resources Ltd</span>
    </Link>
  );
}
