/*
 * The two switches of the trip PDF preview (a new page for every day, and the notes
 * of the transports), remembered in this browser.
 */

/** A preview switch that is on unless it was turned off; both default to on. */
export function pdfSwitchOn(key: string): boolean {
  try {
    return localStorage.getItem(key) !== '0';
  } catch {
    return true;
  }
}

/** A preview switch that is off unless it was turned on (dark mode). */
export function pdfOptInSwitchOn(key: string): boolean {
  try {
    return localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

export function rememberPdfSwitch(key: string, on: boolean): void {
  try {
    localStorage.setItem(key, on ? '1' : '0');
  } catch {
    // A blocked localStorage costs the preference, not the export.
  }
}
