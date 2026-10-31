import { Link } from 'react-router-dom';
import { logos, photos } from '../assets';
import { ceoQuotes, company, milestoneFact } from '../data/site';
import { Ph } from '../components/Ph';
import { usePageTitle } from '../usePageTitle';

const promises = [
  { title: 'Pay fairly', text: 'Every bag is weighed in front of the seller and paid by the kilogram.', dot: 'var(--leaf)' },
  { title: 'Keep it local', text: 'Waste from Plateau State is recycled in Plateau State, and the income stays here.', dot: 'var(--wilval-green)' },
  { title: 'Make it new', text: 'What we collect goes back into use, from our plant to new polythene products.', dot: 'var(--deep-forest)' },
];

const milestones: { year: string | null; text: string }[] = [
  { year: '2019', text: 'WilVal starts buying and recycling nylon waste in Jos.' },
  { year: 'Aug 2019', text: milestoneFact },
  { year: null, text: 'Wilval Polythene starts making bags.' },
  { year: null, text: 'CEO recognised at the Women Achievers Conference and Awards, one of many honours.' },
];

export default function About() {
  usePageTitle('About');
  return (
    <>
      <section className="page-hero" style={{ paddingBlock: '88px 72px' }}>
        <div className="wrap split">
          <div className="stack" style={{ gap: 22 }}>
            <p className="eyebrow">About WilVal</p>
            <h1 className="display display--l" style={{ color: 'var(--deep-forest)' }}>A Jos company keeping nylon out of the environment.</h1>
            <p className="lead muted measure">
              WilVal Global Resources Ltd buys pure-water sachet and nylon waste, recycles it at our own plant, and makes new
              polythene products through Wilval Polythene.
            </p>
            <p className="slogan" style={{ fontSize: 26, lineHeight: '34px', color: 'var(--forest)' }}>{company.slogan}</p>
          </div>
          <img src={photos.tshirt} alt="A WilVal T-shirt printed with www.wilvalglobal.com.ng and the company slogan"
            style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 24 }} />
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div className="stack-sm">
            <p className="eyebrow">Our story</p>
            <h2 className="display display--m">Started with the sachets on our streets</h2>
          </div>
          <div className="stack" style={{ gap: 16 }}>
            <p>
              WilVal began buying and recycling nylon waste in Jos in 2019. In our first August alone, from the 1st to the 24th, we
              recycled over 10 tonnes of low- and high-density nylon.{' '}
              In Ngo Sarah&apos;s words: “{ceoQuotes.mission}”
            </p>
            <p>
              Today we pay collectors, pure-water factories and other businesses for their sachet and nylon waste, recycle it at our
              site in Kuru Jantar, and turn it into new bags. We work with women&apos;s groups, youth collectors and schools to make
              collection a source of income across Plateau State.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm">
            <p className="eyebrow">What we stand for</p>
            <h2 className="display display--m">Three promises</h2>
          </div>
          <div className="grid-3">
            {promises.map((p) => (
              <div key={p.title} className="card">
                <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 999, background: p.dot }} />
                <h3 className="title" style={{ fontSize: 26, lineHeight: '30px' }}>{p.title}</h3>
                <p className="muted small">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark on-dark">
        <div className="wrap split">
          <img src={photos.ceoPortrait} alt={`${company.ceo}, CEO of WilVal Global Resources`}
            style={{ width: '100%', maxWidth: 480, aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: '50% 20%', borderRadius: 24, justifySelf: 'center' }} />
          <div className="stack" style={{ gap: 18 }}>
            <p className="eyebrow eyebrow--leaf">Leadership</p>
            <h2 className="display display--m" style={{ color: '#fff' }}>{company.ceo}</h2>
            <p className="mono" style={{ fontWeight: 600, color: 'var(--leaf)' }}>CEO, {company.name}</p>
            <p>
              Ngo Sarah leads WilVal&apos;s work across recycling, manufacturing and community programmes in Plateau State. A public
              servant, auditor and entrepreneur, she also leads the Sarah Dagah Foundation. Her work has earned many honours,
              including recognition at the Women Achievers Conference and Awards.
            </p>
            <blockquote className="slogan" style={{ margin: 0, fontSize: 22, lineHeight: '32px', color: 'var(--leaf)', borderLeft: 0 }}>
              “{ceoQuotes.fiveDs}”
            </blockquote>
            <img src={photos.awards} alt="Ngo Sarah Pam Dagah with fellow honourees at the Women Achievers Conference and Awards"
              loading="lazy" style={{ borderRadius: 12, aspectRatio: '16 / 9', objectFit: 'cover', marginTop: 8 }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm">
            <p className="eyebrow">Our companies</p>
            <h2 className="display display--m">Two names, one loop</h2>
          </div>
          <div className="grid-2">
            <article className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 22 }}>
              <img src={logos.recyclingMark} alt="Wilval Recycling mark" width={120} height={120} style={{ flex: 'none' }} />
              <div className="stack-sm" style={{ gap: 8 }}>
                <h3 className="title title--l">Wilval Recycling</h3>
                <p className="muted small">Buys and recycles pure-water sachet and nylon waste. <Link className="text-link" to="/sell">Sell your waste →</Link></p>
              </div>
            </article>
            <article className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 22 }}>
              <span aria-hidden="true" style={{ width: 120, height: 120, flex: 'none', borderRadius: 12, background: 'var(--poly-lime)', display: 'grid', placeItems: 'center', font: 'italic 700 26px/28px var(--font-slogan)', color: 'var(--deep-forest)' }}>Wilval</span>
              <div className="stack-sm" style={{ gap: 8 }}>
                <h3 className="title title--l">Wilval Polythene</h3>
                <p className="muted small">Makes shopping, money, dustbin, cosmetic, souvenir and plantation bags. <Link className="text-link" to="/polythene">See the range →</Link></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="wrap stack" style={{ maxWidth: 900, gap: 24 }}>
          <p className="eyebrow">Milestones</p>
          <h2 className="display display--m">How we got here</h2>
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.text}><span className="year">{m.year ?? <Ph>[Year]</Ph>}</span><p>{m.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="cta-strip panel--white" style={{ border: '1px solid var(--line)', background: '#fff' }}>
            <h2 className="display display--s">Want to work with us?</h2>
            <div className="row">
              <Link className="btn btn--leaf" to="/sell">Sell your waste</Link>
              <Link className="btn btn--primary" to="/partner">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
