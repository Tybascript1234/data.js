(function () {
  var container = document.getElementById("embed");
  if (!container) return;

  var fileUrl = "https://example.com/file.js";

  fetch(fileUrl)
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then(content => {
      if (fileUrl.endsWith(".js")) {
        // إنشاء عنصر سكربت لتشغيله
        const script = document.createElement("script");
        script.textContent = content;
        document.body.appendChild(script);
        container.innerHTML = "<p style='color:green'>تم تشغيل السكربت.</p>";
      } else {
        // إدراج كـ HTML
        container.innerHTML = content;
      }
    })
    .catch(err => {
      container.innerHTML = "<p style='color:red'>فشل تحميل المحتوى.</p>";
      console.error("خطأ:", err);
    });
})();
