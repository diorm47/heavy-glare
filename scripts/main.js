// search mode

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(
    'img[src="./assets/icons/search.png"]'
  );
  const searchMode = document.querySelector(".search_mode");
  const closeBtn = document.querySelector(".searchmode_close img");
  const searchModeWrapper = document.querySelector(".search_mode_wrapper");
  function openSearchMode() {
    searchMode.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function closeSearchMode() {
    searchMode.style.display = "none";
    document.body.style.overflow = "";
  }
  searchIcon.addEventListener("click", openSearchMode);
  closeBtn.addEventListener("click", closeSearchMode);
  searchMode.addEventListener("click", function (event) {
    if (!searchModeWrapper.contains(event.target)) {
      closeSearchMode();
    }
  });
});

// fixed nav
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const elementOffset = document.querySelector(".main_nav_bar");

    const scrollPosition = window.scrollY;

    const nav_wrapper = this.document.querySelector(".main_nav_bar");
    if (scrollPosition > 30) {
      nav_wrapper.classList.add("sticked_nav_bar");
    }
    if (scrollPosition < 30) {
      nav_wrapper.classList.remove("sticked_nav_bar");
    }
  });
});
