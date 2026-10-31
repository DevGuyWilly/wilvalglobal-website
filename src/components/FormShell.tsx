import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckIcon } from './Icons';
import { whatsappLink } from '../data/site';

type Props = {
  id?: string;
  eyebrow: string;
  eyebrowClass?: string;
  title: string;
  intro?: ReactNode;
  submitLabel: string;
  successText: string;
  /** Prefilled WhatsApp message offered after submit as a fallback channel. */
  whatsappText: string;
  /** Wire this to your backend or a form service (e.g. a FastAPI/Spring endpoint, Formspree). */
  onSubmit?: (data: Record<string, FormDataEntryValue>) => Promise<void>;
  children: ReactNode;
};

/**
 * Shared form wrapper: handles submit, a sending state and the success message.
 * By default it only logs the payload — connect `onSubmit` before launch.
 */
export function FormShell({ id, eyebrow, eyebrowClass, title, intro, submitLabel, successText, whatsappText, onSubmit, children }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState('sending');
    try {
      if (onSubmit) await onSubmit(data);
      else console.info('[WilVal form] TODO: send to backend', data);
      setState('sent');
    } catch {
      setState('error');
    }
  }

  return (
    <form id={id} className="form" onSubmit={handleSubmit} noValidate={false}>
      <div className="stack-sm" style={{ gap: 8 }}>
        <p className={`eyebrow ${eyebrowClass ?? ''}`}>{eyebrow}</p>
        <h2 className="display display--s">{title}</h2>
        {intro && <p className="muted small">{intro}</p>}
      </div>
      {state === 'sent' ? (
        <div className="form-success" role="status">
          <CheckIcon />
          <div className="stack-sm" style={{ gap: 6 }}>
            <strong>{successText}</strong>
            <span className="small muted">
              Need a faster answer? <a href={whatsappLink(whatsappText)}>Message us on WhatsApp</a>.
            </span>
          </div>
        </div>
      ) : (
        <>
          {children}
          {state === 'error' && (
            <p role="alert" style={{ color: 'var(--danger)' }}>
              Your message did not send. Check your connection and try again, or <a href={whatsappLink(whatsappText)}>message us on WhatsApp</a>.
            </p>
          )}
          <button className="btn btn--primary" type="submit" style={{ alignSelf: 'flex-start' }} disabled={state === 'sending'}>
            {state === 'sending' ? 'Sending…' : submitLabel}
          </button>
        </>
      )}
    </form>
  );
}
