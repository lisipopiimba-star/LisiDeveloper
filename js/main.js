'use strict';

const header = document.querySelector('.site-header');
const burger = document.querySelector('.burger');

async function fillSlot(slot) {
  const img = await findImage(slot.dataset.img);
  if (!img) return;
  img.alt = slot.dataset.alt;
  slot.replaceChildren(img);
  slot.classList.add('has-image');
}

function parseHttpsUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' ? url : null;
  } catch (error) {
    console.warn(`Некорректная ссылка проекта: ${value}`, error);
    return null;
  }
}

function initProjectLinks() {
  document.querySelectorAll('[data-project-link]').forEach((link) => {
    const url = parseHttpsUrl(PROJECT_LINKS[link.dataset.projectLink]);
    if (url) {
      link.href = url.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      return;
    }
    link.remove();
  });
}

function setMenu(open) {
  header.classList.toggle('nav-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

function initMenu() {
  burger.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
  header.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

initMenu();
initProjectLinks();
initReveal();
document.querySelectorAll('[data-img]').forEach(fillSlot);
