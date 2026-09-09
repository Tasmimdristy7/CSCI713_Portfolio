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
  const robot = document.querySelector('.robot');
  if (!paused) robot.classList.add('waving');
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

// Animate each section once as it enters view; content is never hidden.
const entranceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (!paused) entry.target.classList.add('arriving');
    entranceObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section-top, .education-card, .job, .project-card, .contact').forEach(item => entranceObserver.observe(item));
document.querySelector('.robot-arm').addEventListener('animationend', () => document.querySelector('.robot').classList.remove('waving'));

const nameStage = document.querySelector('.name-stage');
const rebuildName = document.querySelector('.rebuild-name');
function assembleName() {
  nameStage.classList.remove('assembling');
  if (paused || reducedMotion.matches) return;
  // Restart the CSS timeline on replay, including each letter's stagger.
  void nameStage.offsetWidth;
  nameStage.classList.add('assembling');
}
rebuildName.addEventListener('click', assembleName);
assembleName();
