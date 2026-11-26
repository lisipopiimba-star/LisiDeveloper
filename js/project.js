'use strict';

const MAX_SCREENSHOTS = 30;

const PROJECTS = {
  'messenger-nexus': { title: 'Messenger Nexus', folder: 'assets/images/messenger-nexus' },
  'aurora-detailing': { title: 'AURORA DETAILING', folder: 'assets/images/aurora-detailing' },
  'nova-finance': { title: 'NOVA FINANCE', folder: 'assets/images/nova-finance' }
};

function createShot(img, title, index) {
  img.alt = `${title} — скриншот ${index}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'shot image-slot has-image';
  button.setAttribute('aria-label', `Открыть на весь экран: ${img.alt}`);
  button.append(img);
  button.addEventListener('click', () => openLightbox(img.src, img.alt));
  return button;
}

async function renderGallery(gallery, project) {
  for (let index = 1; index <= MAX_SCREENSHOTS; index += 1) {
    const img = await findImage(`${project.folder}/screenshot-${index}`);
    if (!img) {
      if (index === 1) document.getElementById('project-note').textContent = 'Скриншоты этого проекта пока не добавлены.';
      return;
    }
    gallery.append(createShot(img, project.title, index));
  }
}

function init() {
  const key = new URLSearchParams(window.location.search).get('p');
  const project = Object.hasOwn(PROJECTS, key) ? PROJECTS[key] : null;
  const title = document.getElementById('project-title');
  if (!project) {
    title.textContent = 'Проект не найден';
    document.getElementById('project-note').textContent = 'Вернитесь к списку проектов и выберите нужный.';
    return;
  }
  title.textContent = project.title;
  document.title = `${project.title} — Lisi Developer`;
  initLightbox();
  renderGallery(document.getElementById('gallery'), project);
}

init();
