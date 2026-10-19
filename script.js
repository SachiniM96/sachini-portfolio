/* Beginner-friendly settings: update repository links here when needed. */
const portfolioConfig = {
  todoRepo: "https://github.com/SachiniM96/ToDoApp"
};

// Local images appear automatically when the corresponding file is added.
document.querySelectorAll('[data-image-wrap]').forEach((wrap) => {
  const image = wrap.querySelector('[data-local-image]');
  const placeholder = wrap.querySelector('[data-placeholder]');
  if (!image) return;
  const showImage = () => {
    image.hidden = false;
    if (placeholder) placeholder.hidden = true;
  };
  const showPlaceholder = () => {
    image.hidden = true;
    if (placeholder) placeholder.hidden = false;
  };
  image.addEventListener('load', showImage);
  image.addEventListener('error', showPlaceholder);
  if (image.complete && image.naturalWidth > 0) showImage();
  else showPlaceholder();
});

// Keep project links in one place so they can be changed without editing the HTML.
document.querySelectorAll('[data-url-key]').forEach((link) => {
  const key = link.dataset.urlKey;
  if (portfolioConfig[key]) link.href = portfolioConfig[key];
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.primary-nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        if (active) link.classList.add('active'); else link.classList.remove('active');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((section) => observer.observe(section));
}

document.querySelector('#year').textContent = new Date().getFullYear();

// Prevent a confusing dead download if the CV has not been added yet.
// const cvLink = document.querySelector('[data-cv-link]');
// const cvNote = document.querySelector('#cv-note');
// if (cvLink) {
//   fetch(cvLink.getAttribute('href'), { method: 'HEAD' }).then((response) => {
//     if (response.ok) {
//       if (cvNote) cvNote.hidden = true;
//     } else {
//       cvLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         showToast('Add your CV PDF at assets/Sachini-Morawinnage-CV.pdf first.');
//       });
//     }
//   }).catch(() => {
//     // Local file previews can block fetch. The click handler still gives helpful guidance.
//     cvLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       showToast('Add your CV PDF at assets/Sachini-Morawinnage-CV.pdf first.');
//     });
//   });
// }
/* CV PDF is stored in assets, so enable the download link. */
const cvLink = document.querySelector('[data-cv-link]');
const cvNote = document.querySelector('#cv-note');

if (cvLink && cvNote) {
  cvNote.hidden = true;
}

function showToast(message) {
  const toast = document.querySelector('#site-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3600);
}
