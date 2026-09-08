const motionButton = document.querySelector('.motion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
function updateMotion() {
  document.documentElement.classList.toggle('paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? 'Motion paused' : 'Pause motion';
  motionButton.disabled = reducedMotion.matches;
  motionButton.title = reducedMotion.matches ? 'Reduced motion is enabled in your device settings' : 'Toggle decorative animations';
}
motionButton.addEventListener('click', () => { paused = !paused; updateMotion(); });
reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updateMotion(); });
updateMotion();
const greetings = ['robot.say("hello, human! welcome to my little universe.");', 'robot.status = "powered by curiosity (and a little coffee)";', 'tests.passed(); // tiny robot, big celebration.', 'const mission = "make things work. then make them better.";'];
let greeting = 0;
document.querySelector('#robot-hello').addEventListener('click', () => {
  document.querySelector('#terminal-message').textContent = greetings[greeting++ % greetings.length];
});
document.querySelector('#year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    links.forEach(link => {
      if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
