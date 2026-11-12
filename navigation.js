const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.hash));
function updateNavigation() {
  const last = sections[sections.length - 1];
  const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  const current = atEnd ? last : sections.filter(section => section.getBoundingClientRect().top <= 160).pop() || sections[0];
  for (const link of links) {
    if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('scroll', updateNavigation, {passive: true});
window.addEventListener('resize', updateNavigation);
updateNavigation();

