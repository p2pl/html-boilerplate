// script.js
// JavaScript Boilerplate for Interactivity – By Peter R. (p2)

"use strict"; // Enforce strict mode to catch common coding errors

/* ============================================================
   ✅ UTILITY FUNCTIONS
   - Shortcuts for selecting DOM elements
============================================================ */
function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}

/* ============================================================
   🚀 INITIALIZE AFTER DOM CONTENT LOAD
============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 JS is ready!");

  /* ------------------------------------------------------------
     📱 MOBILE MENU TOGGLE
     - Opens/closes main navigation on small screens
  ------------------------------------------------------------ */
  const menuBtn = $("#menu-button");
  const nav = $("#main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  /* ------------------------------------------------------------
     🌙 TOGGLE DARK MODE THEME
     - Switch between light and dark themes
  ------------------------------------------------------------ */
  const themeBtn = $("#toggle-theme");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  /* ------------------------------------------------------------
     🧰 HTML BOILERPLATE FORM GENERATOR
     - Dynamically creates a custom HTML file from checkbox options
  ------------------------------------------------------------ */
  const form = $("#boilerplate-form");
  const output = $("#output");
  const downloadBtn = $("#download-btn");

  if (form && output && downloadBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;

      // 🧠 Optional Meta Sections
      if (form["include-seo"].checked) {
        html += `<meta name="description" content="Insert your description here.">\n`;
        html += `<meta name="robots" content="index, follow">\n`;
      }
      if (form["include-og"].checked) {
        html += `<meta property="og:title" content="Your Title">\n`;
        html += '<meta property="og:description" content="Short description for social sharing.>\n';
        html += '<meta property="og:image" content="https://yourdomain.com/image.jpg">\n';
        html += '<meta property="og:url" content="https://yourdomain.com">\n';
        html += '<meta property="og:locale" content="en_US">\n';
        html += '<meta property="og:locale:alternate" content="pl_PL">\n';
        
      }
      if (form["include-twitter"].checked) {
        html += `<meta name="twitter:card" content="summary_large_image">\n`;
        html += `<meta name="twitter:title" content="Your Website Title">\n`;
        html += `<meta name="twitter:description" content="Short description for Twitter/X.">\n`;
        html += `<meta name="twitter:image" content="https://yourdomain.com/image.jpg">\n`;
      }
      if (form["include-schema"].checked) {
        html += `<script type="application/ld+json">
        {   "@context":"https://schema.org",
            "@type":"WebSite",
            "name": "Your Website Title",
            "url": "https://yourdomain.com" }
          </script>\n`;
        }

      html += `<title>Your Website</title>\n</head>\n<body>\n`;

      // 🔗 Accessibility Support
      if (form["include-accessibility"].checked) {
        html += `<a href="#main-content" class="skip-link">Skip to main content</a>\n`;
      }

      html += `<main id="main-content"></main>\n`;

      // ⚠️ Noscript Fallback
      if (form["include-noscript"].checked) {
        html += `<noscript><p>Please enable JavaScript for full functionality.</p></noscript>\n`;
      }

      html += `</body>\n</html>`;

      // 🖥️ Display Generated Code
      output.textContent = html;
      downloadBtn.style.display = "inline-block";
    });

    /* ------------------------------------------------------------
       💾 DOWNLOAD GENERATED HTML
       - Creates and downloads the generated HTML file as a .html
    ------------------------------------------------------------ */
    downloadBtn.addEventListener("click", () => {
      const htmlContent = output.textContent;
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "custom-boilerplate.html";
      link.click();

      URL.revokeObjectURL(url);
    });
  }

  // 🔧 Add more features below as needed...
});

/* ============================================================
   🛠️ ERROR HANDLING (Optional)
   - Wrap logic in try/catch blocks to catch unexpected errors
============================================================ */
try {
  // Add modular scripts or advanced logic here
} catch (error) {
  console.error("Something went wrong:", error);
}