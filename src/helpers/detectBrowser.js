export function detectBrowser() {
  const ua = navigator.userAgent;

  if (ua.includes('Firefox')) {
    return 'firefox';
  }

  if (ua.includes('Edg')) {
    return 'edge';
  }

  if (ua.includes('Chrome') && !ua.includes('Edg')) {
    return 'chrome';
  }

  if (ua.includes('Safari') && !ua.includes('Chrome')) {
    return 'safari';
  }

  return 'other';
}
