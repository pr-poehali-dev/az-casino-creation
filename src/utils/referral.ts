// Obfuscated referral link utility
const REF_BASE = 'aHR0cHM6Ly9wYXJ0cmVkaXZhZGEuY29tLw=='; // base64 encoded
const REF_PARAMS = 'P3Byb21vPWU3MGYxYTYzLTM0NmEtNGE4NC1iMzYzLTY0MzJjNmQzZDY3ZiZ0YXJnZXQ9cmVnaXN0ZXI='; // base64 encoded

export const getRegistrationLink = (): string => {
  // Decode and construct link to hide it from crawlers
  const base = atob(REF_BASE);
  const params = atob(REF_PARAMS);
  return base + params;
};

export const openRegistration = (): void => {
  // Open in new window/tab to prevent indexing of current page
  window.open(getRegistrationLink(), '_blank', 'noopener,noreferrer');
};