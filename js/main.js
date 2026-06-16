// ── Mobile nav toggle ────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Close nav on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ── Mark active nav link by current page ─────────────────
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active');
  });
})();

// ── Score library filter ──────────────────────────────────
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const scoreItems = document.querySelectorAll('.score-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      scoreItems.forEach(item => {
        if (filter === 'all' || item.dataset.genre === filter || item.dataset.level === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();

// ── Contact form submission (static placeholder) ──────────
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  });
})();

// ── Member login form (static placeholder) ────────────────
(function () {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Signing in...';
    btn.disabled = true;
  });
})();
