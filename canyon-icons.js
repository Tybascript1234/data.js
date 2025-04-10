// canyon-icons.js
(function () {
  const icons = {
    home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    search: '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
    settings: '<path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.66l-1.92-3.32a.5.5 0 00-.61-.22l-2.39.96a7.007 7.007 0 00-1.62-.94l-.36-2.54A.5.5 0 0014 2h-4a.5.5 0 00-.5.42l-.36 2.54a7.007 7.007 0 00-1.62.94l-2.39-.96a.5.5 0 00-.61.22L2.7 8.82a.5.5 0 00.12.66l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 14.7a.5.5 0 00-.12.66l1.92 3.32a.5.5 0 00.61.22l2.39-.96c.5.38 1.04.7 1.62.94l.36 2.54A.5.5 0 0010 22h4a.5.5 0 00.5-.42l.36-2.54c.58-.24 1.12-.56 1.62-.94l2.39.96a.5.5 0 00.61-.22l1.92-3.32a.5.5 0 00-.12-.66l-2.03-1.58z"/>',
    // أضف المزيد من الأيقونات هنا
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

        // Clear text and append the SVG
        el.textContent = '';
        el.appendChild(svg);
      }
    });
  }

  // تأكد من تنفيذ السكربت بعد تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectIcons);
  } else {
    injectIcons();
  }
})();
