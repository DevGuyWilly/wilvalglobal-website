import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { materials, rates, type Material } from '../data/site';

const naira = new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 });

type Props = {
  title?: string;
  floating?: boolean;
  showBreakdown?: boolean;
  cta?: { to: string; label: string };
};

/** Estimates what a seller is paid for a given weight and material. */
export function PayCalculator({ title = 'Selling waste in Jos?', floating, showBreakdown, cta }: Props) {
  const [material, setMaterial] = useState<Material>('sachet');
  const [kg, setKg] = useState('50');
  const inputId = useId();

  const rate = rates[material];
  const weight = Math.max(0, Number(kg) || 0);
  const payout = weight * rate;

  return (
    <section className={`calc${floating ? ' calc--floating' : ''}`} aria-label="Pay calculator">
      <div className="calc__head">
        <span className="calc__title">{title}</span>
        {!rates.confirmed && <span className="calc__badge">Sample rates</span>}
      </div>
      <div className="calc__body">
        <div className="calc__tabs" role="group" aria-label="Material">
          {materials.map((m) => (
            <button key={m.id} type="button" className="chip-btn" aria-pressed={material === m.id} onClick={() => setMaterial(m.id)}>
              {floating ? m.short : m.label}
            </button>
          ))}
        </div>
        <label className="field" htmlFor={inputId}>
          {floating ? 'Kilograms' : 'How many kilograms?'}
          <input id={inputId} className="input calc__input" type="number" min={0} inputMode="numeric" value={kg}
            onChange={(e) => setKg(e.target.value)} />
        </label>
        <div className="calc__result" aria-live="polite">
          <span className="muted small">{showBreakdown ? `${naira.format(weight)} kg × ₦${rate}/kg` : 'You get about'}</span>
          <span className="calc__payout">₦{naira.format(payout)}</span>
        </div>
        {showBreakdown && (
          <p className="tiny muted">An estimate. We pay the day&apos;s rate on the weight measured at our yard.</p>
        )}
        {cta && <Link className="btn btn--primary" to={cta.to}>{cta.label}</Link>}
      </div>
    </section>
  );
}
