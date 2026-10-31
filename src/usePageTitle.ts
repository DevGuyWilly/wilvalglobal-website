import { useEffect } from 'react';

const BASE = 'WilVal Global Resources Ltd';

/** Sets the browser tab title for the current page. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : `${BASE} · Recycling in Jos, Nigeria`;
  }, [title]);
}
