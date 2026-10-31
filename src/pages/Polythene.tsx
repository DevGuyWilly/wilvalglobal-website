import { Link } from 'react-router-dom';
import { photos } from '../assets';
import { bagTypes, company } from '../data/site';
import { FormShell } from '../components/FormShell';
import { Ph } from '../components/Ph';
import { usePageTitle } from '../usePageTitle';

export default function Polythene() {
  usePageTitle('Wilval Polythene');
  return (
    <>
      <section className="page-hero">
        <div className="wrap split" style={{ gap: 48 }}>
          <div className="stack" style={{ gap: 20 }}>
            <p className="eyebrow eyebrow--red">Wilval Polythene · a WilVal company</p>
            <h1 className="display display--l" style={{ color: 'var(--deep-forest)' }}>High quality poly products, made in Jos.</h1>
            <p className="lead muted measure">
              Bags for shops, banks, homes, events and farms, made by the same company that recycles Plateau State&apos;s nylon waste.
            </p>
            <div className="row">
              <a className="btn btn--primary" href="#quote">Get a bag quote</a>
              <a className="btn btn--outline" href="#range">See the range</a>
            </div>
          </div>
          <div className="panel panel--white" style={{ position: 'relative', padding: 32 }}>
            <img src={photos.polytheneBags} alt="Wilval Polythene bags in red, black, green, white and striped designs" />
            <span style={{ position: 'absolute', top: 16, right: 16, background: 'var(--poly-lime)', color: 'var(--deep-forest)', font: '700 13px/16px var(--font-display)', letterSpacing: '0.08em', padding: '8px 12px', borderRadius: 999 }}>MADE IN JOS</span>
          </div>
        </div>
      </section>

      <section id="range" className="section section--wash">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm">
            <p className="eyebrow">The range</p>
            <h2 className="display display--m">Six kinds of bag, plus custom orders</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {bagTypes.map((b) => (
              <article key={b.name} className="card" style={{ borderTop: '6px solid var(--poly-lime)', borderRadius: 12, padding: 24, gap: 8 }}>
                <h3 className="title" style={{ fontSize: 26, lineHeight: '30px' }}>{b.name}</h3>
                <p className="muted small">{b.use}</p>
                <p className="tag-mono">Sizes: <Ph>[confirm]</Ph></p>
              </article>
            ))}
          </div>
          <div className="cta-strip on-dark" style={{ background: 'var(--deep-forest)', color: 'var(--on-dark)', borderRadius: 16, padding: 28 }}>
            <div>
              <p className="title" style={{ color: '#fff' }}>Need something else?</p>
              <p>Tell us the size, colour and quantity. <Ph>[Printed with your logo: confirm availability.]</Ph></p>
            </div>
            <a className="btn btn--lime" href="#quote">Ask about a custom order</a>
          </div>
        </div>
      </section>

      <section id="quote" className="section">
        <div className="wrap split split--form">
          <FormShell
            eyebrow="Order"
            eyebrowClass="eyebrow--red"
            title="Get a bag quote"
            intro="We reply with a price and a delivery date."
            submitLabel="Send quote request"
            successText="Thanks. Wilval Polythene will reply with a price and delivery date."
            whatsappText="Hello Wilval Polythene, I would like a quote for bags."
          >
            <div className="fields">
              <label className="field">Your name<input className="input" name="name" required autoComplete="name" /></label>
              <label className="field">Business (optional)<input className="input" name="business" autoComplete="organization" /></label>
              <label className="field">Phone or WhatsApp<input className="input" name="phone" type="tel" required autoComplete="tel" /></label>
              <label className="field">Deliver to<input className="input" name="deliverTo" placeholder="Town and state" /></label>
              <label className="field">Bag type
                <select className="input" name="bagType">{bagTypes.map((b) => <option key={b.name}>{b.name}</option>)}<option>Something else</option></select>
              </label>
              <label className="field">Quantity<input className="input" name="quantity" placeholder="e.g. 5,000 pieces" /></label>
            </div>
            <label className="field">Size, colour or other details<textarea className="input" name="details" rows={3} /></label>
          </FormShell>
          <aside className="stack" style={{ gap: 20 }}>
            <div className="panel panel--lime">
              <p className="eyebrow" style={{ color: 'var(--deep-forest)' }}>Order by phone</p>
              <p className="mono" style={{ font: '600 28px/34px var(--font-mono)' }}>{company.phones[0]}</p>
              <p className="mono" style={{ font: '500 18px/24px var(--font-mono)' }}>{company.phones[1]}</p>
              <p className="small">{company.email}<br />Kuru Jantar, Jos, Plateau State</p>
            </div>
            <div className="panel panel--white" style={{ gap: 8, padding: 26 }}>
              <p className="eyebrow">Buying in bulk from abroad?</p>
              <p className="small muted">Distributors and bulk buyers outside Nigeria can reach us through our partner desk. <Link className="text-link" to="/partner">Partner with us →</Link></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
