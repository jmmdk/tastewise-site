// Small inline SVG icons (stroke-based, currentColor) so the page needs no icon font.
const s = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
export const icons = {
  arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  eye: s('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  smell: s('<path d="M4 8c2-2 4-2 6 0s4 2 6 0 4-2 4-2"/><path d="M4 13c2-2 4-2 6 0s4 2 6 0 4-2 4-2"/><path d="M4 18c2-2 4-2 6 0s4 2 6 0 4-2 4-2"/>'),
  hand: s('<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>'),
  fork: s('<path d="M7 2v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2M9 12v10M17 2c-1.7 0-3 2-3 5s1.3 5 3 5v10"/>'),
  plan: s('<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18M8 15l2 2 4-4"/>'),
  plate: s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>'),
  card: s('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 10h10M7 14h6"/>'),
  flag: s('<path d="M4 22V4M4 4h12l-2 4 2 4H4"/>'),
  heart: s('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>'),
  chart: s('<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>'),
  bell: s('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>'),
  apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.2 1.8-3.27 1.88-3.32-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.3-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34A853" d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z"/><path fill="#FBBC04" d="m16.7 15.3-3.3-3.3 3.3-3.3 3.8 2.2c1.1.6 1.1 1.6 0 2.2z"/><path fill="#4285F4" d="M16.7 8.7 13.4 12 3.6 2.3c.3-.2.8-.2 1.3.1z"/><path fill="#EA4335" d="M16.7 15.3 4.9 21.9c-.5.3-1 .3-1.3.1l9.8-9.7z"/></svg>',
};
