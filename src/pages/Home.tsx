import { Link } from 'react-router-dom';
import { photos, logos } from '../assets';
import { company, impact, milestoneFact, partnerTypes } from '../data/site';
import { PayCalculator } from '../components/PayCalculator';
import { usePageTitle } from '../usePageTitle';

const chain = [
  { title: 'Collect', text: 'Collectors, pure-water factories and businesses bring us sachet and nylon waste.' },
  { title: 'Weigh and pay', text: 'Every bag is weighed at Kuru Jantar and paid for by the kilogram.' },
  { title: 'Sort', text: 'Our team separates sachets from other nylon and removes dirt.' },
  { title: 'Recycle', text: 'We process the sorted nylon at our own plant.' },
  { title: 'Make new', text: 'Wilval Polythene turns out shopping, dustbin, plantation and other bags.', red: true },
];

export default function Home() {
  usePageTitle();
  return (
    <>
      <section className="hero on-dark">
        <img className="hero__bg" src={photos.truck} alt="" fetchPriority="high" />
        <div className="hero__shade" />
        <div className="wrap hero__inner">
          <div className="stack">
            <p className="eyebrow eyebrow--leaf">Jos, Nigeria · Recycle · Reuse · Reduce</p>
            <h1 className="display display--xl">Plastic waste, recovered at the source and made new.</h1>
            <p className="lead measure">
              WilVal Global Resources buys pure-water sachet and nylon waste from collectors, factories and businesses across
              Plateau State, recycles it at our own plant, and makes new polythene products. We are looking for partners to take
              this model further.
            </p>
            <div className="row">
              <Link className="btn btn--leaf" to="/partner">Partner with us</Link>
              <a className="btn btn--outline-light" href="#what">See what we do</a>
            </div>
          </div>
          <PayCalculator floating cta={{ to: '/sell#yard', label: 'Find the drop-off yard' }} />
        </div>
      </section>

      <section id="what" className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div className="stack-sm" style={{ maxWidth: 720 }}>
            <p className="eyebrow">What we do</p>
            <h2 className="display display--m">One loop, run end to end in Jos</h2>
            <p className="muted">
              We control every step from the person who picks up a sachet to the bag that leaves our factory. That is what makes
              the model easy to grow with the right partners.
            </p>
          </div>
          <ol className="chain">
            {chain.map((s, i) => (
              <li key={s.title}>
                <span className={`step-num${s.red ? ' step-num--red' : ''}`}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="title" style={{ margin: '6px 0' }}>{s.title}</h3>
                <p className="muted small">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="impact" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="impact on-dark">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
              <p className="slogan" style={{ fontSize: 36, lineHeight: '44px', color: 'var(--leaf)', maxWidth: '20em' }}>
                “{company.slogan}”
              </p>
              <span className="figure-label" style={{ color: 'var(--on-dark-muted)', maxWidth: '32em' }}>Estimates since 2019. Measured: {milestoneFact}</span>
            </div>
            <div className="stats">
              {impact.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="figure">{s.value}</div>
                  <div className="figure-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section section--wash">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div className="stack-sm" style={{ maxWidth: 720 }}>
            <p className="eyebrow">Work with us</p>
            <h2 className="display display--m">Local at the yard. Open to the world.</h2>
          </div>
          <div className="grid-2">
            <article className="card card--flush" style={{ borderRadius: 24 }}>
              <img className="card__media" src={photos.crew} alt="WilVal crew in orange coveralls moving sacks of collected sachets" style={{ objectPosition: '50% 30%' }} loading="lazy" />
              <div className="card__body">
                <p className="eyebrow">In Plateau State</p>
                <h3 className="display display--s">Collectors and factories</h3>
                <p className="muted small">
                  Sell us used pure-water sachets and nylon. Bring it to Kuru Jantar and we weigh and pay on the spot, or request a
                  pickup for large factory loads.
                </p>
                <ul className="small" style={{ margin: 0, paddingLeft: 20 }}>
                  <li>Paid per kilogram</li>
                  <li>Pickups for large loads</li>
                  <li>Call or WhatsApp {company.phones[0]}</li>
                </ul>
                <div className="card__actions">
                  <Link className="btn btn--primary" to="/sell">Sell your waste</Link>
                  <Link className="btn btn--outline" to="/sell#pickup">Request a pickup</Link>
                </div>
              </div>
            </article>
            <article className="card card--flush card--dark on-dark">
              <div style={{ height: 240, display: 'grid', placeItems: 'center', background: 'var(--wilval-green)' }}>
                <span className="disc" style={{ width: 180, height: 180, border: 0 }}>
                  <img src={logos.globeLogo} alt="" width={168} height={168} />
                </span>
              </div>
              <div className="card__body">
                <p className="eyebrow eyebrow--leaf">Worldwide</p>
                <h3 className="display display--s">Partners, buyers and investors</h3>
                <p className="small">We are ready to grow the loop. Talk to us if you are:</p>
                <ul className="partner-list">
                  {partnerTypes.map((p) => (
                    <li key={p.key}><strong>{p.short}</strong><br />{p.shortDetail}</li>
                  ))}
                </ul>
                <div className="card__actions">
                  <Link className="btn btn--leaf" to="/partner#enquire">Start a partnership</Link>
                  <Link className="btn btn--outline-light" to="/partner#enquire">Request our company profile</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
            <div className="stack-sm">
              <p className="eyebrow">Inside the yard</p>
              <h2 className="display display--m">The work, as it happens</h2>
            </div>
            <Link className="text-link" to="/community">See more of our work →</Link>
          </div>
          <div className="bento">
            <figure className="span-2 row-2"><img src={photos.truck} alt="A truck loaded with sacks of collected nylon" loading="lazy" /><figcaption>Loads arriving at Kuru Jantar</figcaption></figure>
            <figure><img src={photos.coverall} alt="A Wilval Recycling worker in orange coveralls" loading="lazy" /><figcaption>Our crew</figcaption></figure>
            <figure><img src={photos.processing} alt="Shredded sachets being fed into a machine" loading="lazy" /><figcaption>Processing</figcaption></figure>
            <figure className="span-2"><img src={photos.sacks} alt="Sacks of sorted nylon" loading="lazy" /><figcaption>Sorted and sacked</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap split" style={{ gap: 48 }}>
          <div className="stack" style={{ gap: 18 }}>
            <p className="eyebrow">Leadership and community</p>
            <h2 className="display display--m">Rooted in Jos</h2>
            <p className="muted">
              We work with women&apos;s groups, youth collectors and schools across Plateau State, turning nylon collection into income
              and teaching why it matters.
            </p>
            <p className="muted">
              WilVal is led by CEO {company.ceo}, who also leads the Sarah Dagah Foundation. Her work has earned honours including the Women Achievers Conference and Awards.
            </p>
            <Link className="text-link" to="/about">Our story →</Link>
          </div>
          <div className="panel panel--white" style={{ gap: 18 }}>
            <p className="eyebrow eyebrow--red">Wilval Polythene</p>
            <img src={photos.polytheneBags} alt="Wilval Polythene bags in many colours" loading="lazy" />
            <p style={{ fontWeight: 600 }}>Shopping, money, dustbin, cosmetic, souvenir and plantation bags.</p>
            <Link className="btn btn--lime" to="/polythene#quote" style={{ alignSelf: 'flex-start' }}>Get a bag quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
