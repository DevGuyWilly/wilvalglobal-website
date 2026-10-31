import { Link } from 'react-router-dom';
import { company, telLink, whatsappLink } from '../data/site';
import { FormShell } from '../components/FormShell';
import { Ph } from '../components/Ph';
import { usePageTitle } from '../usePageTitle';

export default function Contact() {
  usePageTitle('Contact');
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="wrap stack" style={{ maxWidth: 'calc(760px + 2 * var(--gutter))', gap: 16 }}>
          <p className="eyebrow">Contact</p>
          <h1 className="display display--l" style={{ color: 'var(--deep-forest)' }}>Talk to the right desk.</h1>
          <p className="lead muted">Selling waste in Jos, ordering bags, or partnering from anywhere in the world: here is the fastest way to reach us.</p>
        </div>
      </section>

      <section style={{ paddingBottom: 72 }}>
        <div className="wrap grid-2">
          <article className="card" style={{ borderRadius: 24, padding: 32, gap: 16 }}>
            <p className="eyebrow">In Jos · collectors, factories, bag buyers</p>
            <h2 className="display display--s">Local desk</h2>
            <dl className="facts facts--light" style={{ fontSize: 16, lineHeight: '24px' }}>
              <dt>Call / WhatsApp</dt><dd><a className="mono" href={telLink(company.phones[0])} style={{ fontWeight: 600, fontSize: 18, color: 'var(--ink)' }}>{company.phones[0]}</a></dd>
              <dt>Also</dt><dd><a className="mono" href={telLink(company.phones[1])} style={{ fontWeight: 600, fontSize: 18, color: 'var(--ink)' }}>{company.phones[1]}</a></dd>
              <dt>Yard</dt><dd>Kuru Jantar, Jos, Plateau State</dd>
              <dt>Open</dt><dd><Ph>{company.yardHours}</Ph></dd>
            </dl>
            <div className="card__actions">
              <a className="btn btn--leaf" href={whatsappLink('Hello WilVal')}>WhatsApp us</a>
              <a className="btn btn--outline" href={company.mapsUrl} target="_blank" rel="noreferrer">Get directions</a>
            </div>
          </article>
          <article className="card card--dark on-dark" style={{ padding: 32, gap: 16 }}>
            <p className="eyebrow eyebrow--leaf">Worldwide · partners, investors, NGOs</p>
            <h2 className="display display--s">Partner desk</h2>
            <dl className="facts" style={{ fontSize: 16, lineHeight: '24px' }}>
              <dt>Email</dt><dd><a href={`mailto:${company.email}`} style={{ color: '#fff', fontWeight: 600 }}>{company.email}</a></dd>
              <dt>WhatsApp</dt><dd className="mono" style={{ fontWeight: 600, fontSize: 18 }}>{company.phonesIntl[0]}</dd>
              <dt>Facebook</dt><dd><a href={company.facebook} target="_blank" rel="noreferrer" style={{ color: '#fff' }}>facebook.com/wilvalglobal</a></dd>
              <dt>Time zone</dt><dd>West Africa Time, UTC+1</dd>
              <dt>Reply</dt><dd>Within <Ph>{company.partnerReplyDays}</Ph> working days</dd>
            </dl>
            <div className="card__actions">
              <Link className="btn btn--leaf" to="/partner#enquire">Send a partnership enquiry</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap split split--form">
          <FormShell
            eyebrow="Send a message"
            title="We will pass it to the right person"
            submitLabel="Send message"
            successText="Thanks. Your message is on its way to the right person at WilVal."
            whatsappText="Hello WilVal"
          >
            <label className="field">I am a…
              <select className="input" name="role">
                <option>Collector selling waste</option>
                <option>Factory or business selling waste</option>
                <option>Customer buying polythene bags</option>
                <option>Partner, investor or NGO</option>
                <option>Journalist or researcher</option>
                <option>Something else</option>
              </select>
            </label>
            <div className="fields">
              <label className="field">Your name<input className="input" name="name" required autoComplete="name" /></label>
              <label className="field">Phone, WhatsApp or email<input className="input" name="contact" required /></label>
            </div>
            <label className="field">Message<textarea className="input" name="message" rows={5} required /></label>
          </FormShell>
          <aside className="stack" style={{ gap: 18 }}>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="panel panel--white"
              style={{ aspectRatio: '4 / 3', placeItems: 'center', display: 'grid', textAlign: 'center', textDecoration: 'none', borderStyle: 'dashed', borderColor: 'var(--line-strong)' }}>
              <span>
                <span className="title" style={{ display: 'block', color: 'var(--ink)' }}>Kuru Jantar, Jos</span>
                <span className="small muted">Open in Google Maps → <Ph>[drop the exact yard pin]</Ph></span>
              </span>
            </a>
            <div className="panel panel--white" style={{ gap: 8, padding: 22 }}>
              <p className="eyebrow">Quick links</p>
              <Link className="text-link" to="/sell#pickup">Request a waste pickup →</Link>
              <Link className="text-link" to="/polythene#quote">Get a bag quote →</Link>
              <Link className="text-link" to="/partner#enquire">Partnership enquiry →</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
