import { Link } from 'react-router-dom';
import { photos } from '../assets';
import { ceoQuotes, communityStats, company } from '../data/site';
import { usePageTitle } from '../usePageTitle';

const programmes = [
  { eyebrow: "Women's groups", title: 'Collection as income', text: "We meet women's groups in their communities, explain what we buy, and set them up to sell their collected waste to us.", stat: 'Groups reached', value: communityStats.womensGroups, img: photos.womensGroup, alt: "A WilVal meeting with a women's group in Jos" },
  { eyebrow: 'Schools and communities', title: 'Sensitisation visits', text: 'Talks on why nylon waste harms our environment and what everyone can do about it, with the 3Rs: reduce, reuse, recycle.', stat: 'Visits held', value: communityStats.visits, img: photos.sensitisation, alt: 'A WilVal team member speaking beside a Wilval Recycling banner' },
  { eyebrow: 'Youth collectors', title: 'Work for young people', text: 'Young people in Jos earn by collecting sachets and nylon and selling them to our yard.', stat: 'Youth collectors', value: communityStats.youthCollectors, img: photos.youthSession, alt: 'Young people at a WilVal session in a classroom' },
];

export default function Community() {
  usePageTitle('Community');
  return (
    <>
      <section className="photo-hero on-dark">
        <img className="hero__bg" src={photos.womensGroup} alt="" style={{ objectPosition: '50% 40%' }} />
        <div className="hero__shade" />
        <div className="wrap">
          <div className="photo-hero__inner stack" style={{ gap: 20 }}>
            <p className="eyebrow eyebrow--leaf">Community</p>
            <h1 className="display display--l" style={{ color: '#fff' }}>Clean streets that pay.</h1>
            <p className="lead">
              We work with women&apos;s groups, youth collectors and schools across Plateau State, so that collecting nylon becomes a
              source of income and everyone knows why it matters.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="stack-sm">
            <p className="eyebrow">Our programmes</p>
            <h2 className="display display--m">Who we work with</h2>
          </div>
          <div className="grid-3">
            {programmes.map((p) => (
              <article key={p.title} className="card card--flush">
                <img src={p.img} alt={p.alt} loading="lazy" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} />
                <div className="card__body" style={{ gap: 10 }}>
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="title title--l">{p.title}</h3>
                  <p className="muted small">{p.text}</p>
                  <p className="tag-mono">{p.stat}: <strong style={{ color: 'var(--forest)' }}>{p.value}</strong> (est.)</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--leaf section--tight">
        <div className="wrap stack" style={{ maxWidth: 900, gap: 14 }}>
          <p className="slogan" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.25 }}>
            “{ceoQuotes.mission}”
          </p>
          <p className="mono" style={{ fontWeight: 600, fontSize: 15 }}>{company.ceo}, CEO, WilVal Global Resources Ltd</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ gap: 28 }}>
          <div className="stack-sm">
            <p className="eyebrow">Gallery</p>
            <h2 className="display display--m">In the community and at the yard</h2>
          </div>
          <div className="bento" style={{ gridAutoRows: 220 }}>
            <figure className="span-2 row-2"><img src={photos.youthSession} alt="Young people raising their hands at a WilVal session" loading="lazy" /><figcaption>Youth session</figcaption></figure>
            <figure><img src={photos.coverall} alt="Wilval Recycling crew member" loading="lazy" /><figcaption>Our crew</figcaption></figure>
            <figure><img src={photos.tshirt} alt="WilVal slogan T-shirt" loading="lazy" /><figcaption>Our slogan</figcaption></figure>
            <figure><img src={photos.sacks} alt="Sacks of collected nylon" loading="lazy" /><figcaption>Collected</figcaption></figure>
            <figure><img src={photos.truck} alt="A truck loaded with collected nylon" loading="lazy" /><figcaption>Arriving</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-strip on-dark" style={{ background: 'var(--deep-forest)', color: 'var(--on-dark)', padding: '48px max(24px, 4vw)' }}>
            <div className="stack-sm" style={{ maxWidth: '34em' }}>
              <p className="eyebrow eyebrow--leaf">Support a programme</p>
              <h2 className="display display--s" style={{ color: '#fff' }}>Fund the next women&apos;s group or school visit</h2>
              <p>NGOs, development partners and sponsors can back a programme and receive reports on what it achieved.</p>
            </div>
            <div className="row">
              <Link className="btn btn--leaf" to="/partner">Partner with us</Link>
              <Link className="btn btn--outline-light" to="/contact">Invite us to your community</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
