document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".custom-select");

  selects.forEach((select) => {
    const selected = select.querySelector(".select-selected");
    const optionsContainer = select.querySelector(".select-items");
    const optionsList = select.querySelectorAll(".select-items .option");

    selected.addEventListener("click", function () {
      optionsContainer.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });

    optionsList.forEach((option) => {
      option.addEventListener("click", function () {
        selected.querySelector("img").src = this.querySelector("img").src;
        selected.querySelector("span").textContent =
          this.querySelector("span").textContent;
        optionsContainer.classList.add("select-hide");
      });
    });
  });
});

document.addEventListener("click", function (e) {
  const selects = document.querySelectorAll(".custom-select");

  selects.forEach((select) => {
    const optionsContainer = select.querySelector(".select-items");
    if (!select.contains(e.target)) {
      optionsContainer.classList.add("select-hide");
    }
  });
});
