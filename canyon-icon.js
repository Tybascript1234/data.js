(function() {
  const icons = {
    home: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
           </svg>`,
    search: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 
                        6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 
                        4.99L20.49 19l-4.99-5zM10 14a4 4 0 110-8 4 4 0 010 8z"/>
             </svg>`
    // أضف المزيد من الأيقونات هنا
  };

  function replaceIcons() {
    const elements = document.querySelectorAll('.Canyon-icon');
    console.log('Replacing icons...');
    elements.forEach(el => {
      const name = el.textContent.trim();
      console.log('Looking for icon:', name);
      if (icons[name]) {
        el.innerHTML = icons[name];  // استبدال النص بالأيقونة
        el.classList.add('Canyon-icon-loaded');
        console.log('Icon replaced:', name);
      } else {
        el.textContent = "Icon not found"; // في حالة عدم العثور على الأيقونة
      }
    });
  }

  // تأكد من أن السكربت يتم تحميله بشكل كامل بعد تحميل الصفحة
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded, replacing icons...');
    replaceIcons();
  });
})();
