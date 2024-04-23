(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    body: document.querySelector(".body"),
  };

  function toggleMobileMenu() {
    const isMobileMenuOpen =
      refs.openMobileMenuBtn.getAttribute("aria-expanded") === "true" || false;
    refs.openMobileMenuBtn.setAttribute("aria-expanded", !isMobileMenuOpen);

    refs.mobileMenu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  }

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  window
    .matchMedia("(min-width: 768px)")
    .addEventListener("change", (event) => {
      if (!event.matches) return;
      refs.mobileMenu.classList.remove("is-open");
      refs.openMobileMenuBtn.setAttribute("aria-expanded", false);
      refs.body.classList.remove("no-scroll");
    });
})();
