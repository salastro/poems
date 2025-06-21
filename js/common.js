(() => {
  // <stdin>
  function setupBackToTop() {
    const intersectionObserver = new IntersectionObserver(function(entries) {
      const topBtn = document.querySelector(".top-of-site-link");
      if (topBtn === null) return;
      topBtn.dataset.visible = entries[0].boundingClientRect.y < 0;
    });
    const topAnchor = document.querySelector("#top-of-site-anchor");
    if (topAnchor !== null) {
      intersectionObserver.observe(topAnchor);
    }
  }
  function setupHypothes() {
    const hypothesisContainer = document.querySelector(".hypothesis-container");
    const sidebarCheckbox = document.querySelector("#sidebar-checkbox");
    if (hypothesisContainer !== null) {
      hypothesisContainer.addEventListener("click", (e) => {
        e.preventDefault();
        let script = document.createElement("script");
        script.setAttribute("src", "https://cdn.hypothes.is/hypothesis");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        if (sidebarCheckbox && sidebarCheckbox.checked) {
          sidebarCheckbox.checked = false;
        }
      });
    }
    const hypothesisLink = document.querySelector("#hypothesis-link");
    if (hypothesisLink !== null) {
      hypothesisContainer.addEventListener("click", (e) => e.preventDefault());
    }
  }
  function setupDarkMode() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("darkmode");
    const shouldEnableDark = saved === "true" || saved === null && prefersDark;
    if (shouldEnableDark) {
      document.body.classList.add("darkmode");
    }
    const checkbox = document.getElementById("darkmode-checkbox");
    if (checkbox) {
      checkbox.checked = shouldEnableDark;
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          document.body.classList.add("darkmode");
          localStorage.setItem("darkmode", "true");
        } else {
          document.body.classList.remove("darkmode");
          localStorage.setItem("darkmode", "false");
        }
      });
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    setupBackToTop();
    setupHypothes();
    setupDarkMode();
  });
})();
