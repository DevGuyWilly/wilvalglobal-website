import type { ReactNode } from 'react';

/** Marks copy WilVal still needs to confirm, so it is easy to find before launch. */
export function Ph({ children }: { children: ReactNode }) {
  return <span className="placeholder" data-placeholder>{children}</span>;
}
