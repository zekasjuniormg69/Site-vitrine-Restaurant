// script.js - Comportements interactifs du site G-Kub
// Ce fichier aide un développeur junior à comprendre les interactions de base.

const burgerButton = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('a[data-scroll]');

// Ouvrir / fermer le menu mobile
burgerButton?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fermer le menu mobile lorsqu'on clique sur un lien
scrollLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Observer les éléments pour ajouter un effet d'apparition progressive
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

// Ajoute un message utile si JavaScript n'est pas activé
window.addEventListener('DOMContentLoaded', () => {
  const noscriptBanner = document.querySelector('.no-js-warning');
  if (noscriptBanner) {
    noscriptBanner.classList.add('visible');
  }
});
