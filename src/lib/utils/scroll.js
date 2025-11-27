export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Fallback: scroll to top if element not found
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
