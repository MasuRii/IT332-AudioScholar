// Simple environment-aware logger
const isLocalhost = typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const noop = () => {};

export const logger = {
  debug: isLocalhost ? console.log.bind(console) : noop,
  info: isLocalhost ? console.info?.bind(console) || console.log.bind(console) : noop,
  warn: isLocalhost ? console.warn.bind(console) : noop,
  // Keep errors visible in all environments for troubleshooting critical issues
  error: console.error.bind(console),
};
