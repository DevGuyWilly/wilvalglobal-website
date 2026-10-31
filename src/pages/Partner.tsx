import { Link } from 'react-router-dom';
import { logos, photos } from '../assets';
import { company, partnerTypes } from '../data/site';
import { FormShell } from '../components/FormShell';
import { Ph } from '../components/Ph';
import { usePageTitle } from '../usePageTitle';

const strengths = [
  { title: 'A paid collection network', text: 'Collectors, pure-water factories and businesses across Plateau State sell their waste to us by the kilogram.', color: 'var(--wilval-green)' },
  { title: 'Our own recycling plant', text: 'Sorting and processing happen at our site in Kuru Jantar, Jos.', color: 'var(--wilval-green)' },
  { title: 'Manufacturing', text: 'Our subsidiary, Wilval Polythene, makes shopping, dustbin, plantation and other bags.', color: 'var(--poly-red)' },
  { title: 'Community reach', text: "Programmes with women's groups, youth collectors and schools across the state.", color: 'var(--leaf)' },
];

export default function Partner() {
  usePageTitle('Partner with us');
  return (
    <>
      <section className="page-hero page-hero--dark on-dark" style={{ paddingBlock: 88 }}>
        <div className="wrap split split--wide" style={{ gap: 48 }}>
          <div className="stack" style={{ gap: 22 }}>
            <p className="eyebrow eyebrow--leaf">Partner with us · Worldwide</p>
            <h1 className="display display--l">Help us grow a working recycling loop in Nigeria.</h1>
            <p className="lead measure">
              We already buy, sort and recycle pure-water sachet and nylon waste in Jos, and make new polythene products from it.
              With the right partners we can do more of it, in more places.
            </p>
            <div className="row">
              <a className="btn btn--leaf" href="#enquire">Start a conversation</a>
              <a className="btn btn--outline-light" href="#enquire">Request our company profile</a>
            </div>
          </div>
          <img src={photos.truck} alt="A WilVal truck loaded with sacks of collected nylon"
            style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 24 }} />
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 36 }}>
          <div className="stack-sm" style={{ maxWidth: 720 }}>
            <p className="eyebrow">What we bring</p>
            <h2 className="display display--m">Already running, on the ground</h2>
          </div>
          <div className="grid-4">
            {strengths.map((s) => (
              <div key={s.title} className="card-top-rule" style={{ borderTopColor: s.color }}>
                <h3 className="title">{s.title}</h3>
                <p className="muted small">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm" style={{ maxWidth: 720 }}>
            <p className="eyebrow">Who we work with</p>
            <h2 className="display display--m">Four ways to partner</h2>
          </div>
          <div className="grid-2" style={{ gap: 20 }}>
            {partnerTypes.map((p) => (
              <article key={p.key} className="card">
                <p className={`eyebrow${p.key === 'buyer' ? ' eyebrow--red' : ''}`}>{p.eyebrow}</p>
                <h3 className="title title--l" style={{ fontSize: 26, lineHeight: '30px' }}>{p.title}</h3>
                <p className="muted small">
                  {p.body}{' '}
                  {p.key === 'buyer' && <Link className="text-link" to="/polythene">See the range →</Link>}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="section">
        <div className="wrap split split--form">
          <FormShell
            eyebrow="Partnership enquiry"
            title="Tell us about your organisation"
            intro={<>We reply within <Ph>{company.partnerReplyDays}</Ph> working days, West Africa Time.</>}
            submitLabel="Send enquiry"
            successText="Thank you. Your enquiry has reached our partner desk and we will reply by email."
            whatsappText="Hello WilVal, I would like to discuss a partnership."
          >
            <div className="fields">
              <label className="field">Your name<input className="input" name="name" required autoComplete="name" /></label>
              <label className="field">Organisation<input className="input" name="organisation" required autoComplete="organization" /></label>
              <label className="field">Email<input className="input" name="email" type="email" required autoComplete="email" /></label>
              <label className="field">Country<input className="input" name="country" required autoComplete="country-name" /></label>
            </div>
            <label className="field">How would you like to work with us?
              <select className="input" name="partnershipType">
                {partnerTypes.map((p) => <option key={p.key}>{p.option}</option>)}
                <option>Something else</option>
              </select>
            </label>
            <label className="field">What do you have in mind?<textarea className="input" name="message" rows={4} /></label>
            <label className="check"><input type="checkbox" name="wantsProfile" /> Send me the WilVal company profile</label>
          </FormShell>

          <aside className="stack" style={{ gap: 20 }}>
            <div className="panel panel--dark on-dark">
              <p className="eyebrow eyebrow--leaf">Talk to us directly</p>
              <p className="title" style={{ color: '#fff', fontSize: 22 }}>{company.email}</p>
              <dl className="facts">
                <dt>WhatsApp</dt><dd className="mono">{company.phonesIntl[0]}</dd>
                <dt>Phone</dt><dd className="mono">{company.phonesIntl[1]}</dd>
                <dt>Hours</dt><dd>{company.timezone}</dd>
                <dt>Visit</dt><dd>Kuru Jantar, Jos, Plateau State, Nigeria</dd>
              </dl>
            </div>
            <div className="panel panel--white" style={{ flexDirection: 'row', alignItems: 'center', gap: 18 }}>
              <span className="disc" style={{ width: 72, height: 72, flex: 'none' }}><img src={logos.recyclingMark} alt="" width={60} height={60} /></span>
              <p className="small muted">Led by CEO {company.ceo}. <Link className="text-link" to="/about">Read our story →</Link></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
