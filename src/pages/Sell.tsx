import { photos } from '../assets';
import { company, rates, telLink, whatsappLink } from '../data/site';
import { PayCalculator } from '../components/PayCalculator';
import { FormShell } from '../components/FormShell';
import { Ph } from '../components/Ph';
import { usePageTitle } from '../usePageTitle';

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: <>No. Bring your waste to the yard during opening hours. For loads over <Ph>{company.pickupMinimumKg}</Ph> kg, request a pickup instead.</>,
  },
  { q: 'How will I be paid?', a: <>Cash or bank transfer, whichever you prefer. We pay on the spot, after we weigh your bags in front of you.</> },
  { q: 'Is there a minimum amount?', a: <>No. We buy as little as one sack, like the ones in the photo below.</> },
  { q: 'What do you not buy?', a: <>Bags or sachets that are still filled with water. Empty them out before you come.</> },
];

export default function Sell() {
  usePageTitle('Sell your waste');
  return (
    <>
      <section className="page-hero">
        <div className="wrap split" style={{ gap: 48 }}>
          <div className="stack" style={{ gap: 20 }}>
            <p className="eyebrow">Sell your waste · Jos, Plateau State</p>
            <h1 className="display display--l" style={{ color: 'var(--deep-forest)' }}>We buy pure-water sachets and nylon. Paid by the kilo.</h1>
            <p className="lead muted measure">
              Collectors, pure-water factories and other businesses: bring your waste to our yard in Kuru Jantar, or ask us to pick
              up a large load. We weigh it in front of you and pay on the spot.
            </p>
            <div className="row">
              <a className="btn btn--primary" href="#yard">Find the yard</a>
              <a className="btn btn--outline" href="#pickup">Request a pickup</a>
            </div>
            <p className="small muted">
              Questions? Call or WhatsApp <a className="mono" href={telLink(company.phones[0])} style={{ color: 'var(--ink)', fontWeight: 600 }}>{company.phones[0]}</a>
            </p>
          </div>
          <PayCalculator title="What will I get?" showBreakdown />
        </div>
      </section>

      <section className="section section--tight section--wash">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm">
            <p className="eyebrow">What we buy</p>
            <h2 className="display display--m">Two kinds of waste, paid per kilogram</h2>
          </div>
          <div className="grid-2">
            <article className="card" style={{ borderRadius: 12, gap: 12 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="title title--l">Pure-water sachets</h3>
                <span className="mono" style={{ font: '600 22px/26px var(--font-mono)', color: 'var(--forest)' }}>₦{rates.sachet}/kg</span>
              </div>
              <p className="muted small">Used sachets from homes and streets, and offcuts or rejects from pure-water factories.</p>
              <p className="small"><strong>Best price when:</strong> emptied of water, dry, and free of sand.</p>
            </article>
            <article className="card" style={{ borderRadius: 12, gap: 12 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="title title--l">Nylon and polythene</h3>
                <span className="mono" style={{ font: '600 22px/26px var(--font-mono)', color: 'var(--forest)' }}>₦{rates.nylon}/kg</span>
              </div>
              <p className="muted small">Shopping bags, black bags and wrapping film from homes, shops, markets and factories.</p>
              <p className="small"><strong>Best price when:</strong> free of food, sand and water.</p>
            </article>
          </div>
          <p className="tiny muted">
            {rates.confirmed ? '' : 'Sample rates shown. '}Rates change with the market. Call before a large delivery to confirm today&apos;s price.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2" style={{ gap: 48 }}>
          <div className="stack" style={{ gap: 18 }}>
            <p className="eyebrow">Collectors</p>
            <h2 className="display display--s">Bring it to the yard</h2>
            <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 10 }}>
              <li>Gather sachets and nylon and keep them dry.</li>
              <li>Bring them to Kuru Jantar during opening hours. No appointment needed.</li>
              <li>We weigh your bags in front of you and pay by the kilogram.</li>
            </ol>
          </div>
          <div className="stack" style={{ gap: 18 }}>
            <p className="eyebrow">Factories and businesses</p>
            <h2 className="display display--s">We come to you</h2>
            <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 10 }}>
              <li>Tell us the type and rough weight of your waste.</li>
              <li>We send a truck at a time that suits you.</li>
              <li>We weigh the load and pay per kilogram. Regular collections can be set up.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="pickup" className="section section--wash">
        <div className="wrap split split--form">
          <FormShell
            eyebrow="Large loads"
            title="Request a pickup"
            intro={<>For <Ph>{company.pickupMinimumKg}</Ph> kg or more. We will call you back to agree a time.</>}
            submitLabel="Send pickup request"
            successText="Thanks. We have your request and will call you to agree a pickup time."
            whatsappText="Hello WilVal, I would like to request a pickup."
          >
            <div className="fields">
              <label className="field">Your name<input className="input" name="name" required autoComplete="name" placeholder="Amina Danjuma" /></label>
              <label className="field">Factory or business (optional)<input className="input" name="organisation" autoComplete="organization" /></label>
              <label className="field">Phone or WhatsApp<input className="input" name="phone" type="tel" required autoComplete="tel" placeholder="0803 000 0000" /></label>
              <label className="field">Area in Jos<input className="input" name="area" required placeholder="e.g. Terminus, Bukuru" /></label>
              <label className="field">What do you have?
                <select className="input" name="material"><option>Pure-water sachets</option><option>Nylon and polythene</option><option>A mix of both</option></select>
              </label>
              <label className="field">Rough weight (kg)<input className="input" name="weightKg" type="number" min={0} inputMode="numeric" placeholder="250" /></label>
            </div>
            <label className="field">Anything else we should know?
              <textarea className="input" name="notes" rows={3} placeholder="Gate colour, how often you have waste, best time to call" />
            </label>
          </FormShell>

          <aside id="yard" className="stack" style={{ gap: 20 }}>
            <div className="panel panel--dark on-dark">
              <p className="eyebrow eyebrow--leaf">Drop-off yard</p>
              <p className="title title--l" style={{ color: '#fff' }}>Kuru Jantar, Jos, Plateau State</p>
              <dl className="facts">
                <dt>Open</dt><dd><Ph>{company.yardHours}</Ph></dd>
                <dt>Call</dt><dd className="mono">{company.phones[0]}</dd>
                <dt>Also</dt><dd className="mono">{company.phones[1]}</dd>
              </dl>
              <div className="row">
                <a className="btn btn--leaf" href={company.mapsUrl} target="_blank" rel="noreferrer">Get directions</a>
                <a className="btn btn--outline-light" href={whatsappLink('Hello WilVal, I have waste to sell.')}>WhatsApp</a>
              </div>
            </div>
            <img src={photos.crew} alt="WilVal crew in orange coveralls moving sacks at the yard" loading="lazy"
              style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', objectPosition: '50% 30%', borderRadius: 12 }} />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ maxWidth: 860, gap: 20 }}>
          <p className="eyebrow">Questions sellers ask</p>
          <h2 className="display display--m">Before you come</h2>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <figure style={{ margin: 0 }}>
            <img src={photos.sacks} alt="Filled sacks of collected nylon at the WilVal yard" loading="lazy"
              style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 12 }} />
            <figcaption className="tiny muted" style={{ marginTop: 8 }}>One sack like these is enough to sell. Larger loads? Request a pickup.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
