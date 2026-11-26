'use strict';

const IMAGE_EXTENSIONS = ['jpg', 'png', 'webp', 'jpeg', 'JPG', 'PNG', 'WEBP', 'JPEG'];

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

async function findImage(basePath) {
  for (const ext of IMAGE_EXTENSIONS) {
    const img = await loadImage(`${basePath}.${ext}`);
    if (img) return img;
  }
  return null;
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.closest('.lb-close')) lightbox.close();
  });
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const image = lightbox.querySelector('img');
  image.src = src;
  image.alt = alt;
  lightbox.showModal();
}
