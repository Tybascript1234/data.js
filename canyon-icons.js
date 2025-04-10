(function () {
  const icons = {
    home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    search: '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/>',
    settings: '<path d="..."/>'
  };

  function injectIcons() {
    const elements = document.querySelectorAll('.Canyon-icon');
    elements.forEach(el => {
      const iconName = el.textContent.trim().toLowerCase();
      const path = icons[iconName];
      if (path) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('aria-hidden', 'true');
        svg.innerHTML = path;

        el.textContent = '';
        el.appendChild(svg);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectIcons);
  } else {
    injectIcons();
  }
})();
