// script.js
// JavaScript Boilerplate for Interactivity – By Peter R. (p2)

// Enforce strict mode – helps catch bugs early by disallowing unsafe actions
"use strict";

/* -----------------------------------------------
   Utility Functions
-------------------------------------------------*/

// Shorthand for selecting a single DOM element
function $(selector) {
  return document.querySelector(selector);
}

// Shorthand for selecting multiple DOM elements
function $all(selector) {
  return document.querySelectorAll(selector);
}

/* -----------------------------------------------
   Wait for DOM to Load
-------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 JS is ready!");

  /* ------------------------------
     Toggle Navigation Menu
  ------------------------------*/
  const menuBtn = $("#menu-button");
  const nav = $("#main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open"); // Show/hide mobile menu
    });
  }

  /* ------------------------------
     Toggle Dark Mode Theme
  ------------------------------*/
  const themeBtn = $("#toggle-theme");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark"); // Apply/remove 'dark' class
    });
  }

  // 🔧 Add more features below as your site grows...
});

/* -----------------------------------------------
   Optional: Basic Error Handling
-------------------------------------------------*/

try {
  // Add custom JavaScript logic here
} catch (error) {
  console.error("Something went wrong:", error);
}

/* -----------------------------------------------
   Notes for Developers
-------------------------------------------------*/
// ✅ "use strict" ensures cleaner, more secure code
// ✅ DOMContentLoaded guarantees the page is fully loaded before running code
// ✅ Utility functions like $() and $all() make DOM manipulation easier
// ✅ This setup is scalable – perfect for adding modules, form validation, sliders, etc.