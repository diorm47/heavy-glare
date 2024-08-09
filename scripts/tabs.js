const tabs = document.querySelector(".products_descriptions_titles");
const tabButton = document.querySelectorAll(".products_descriptions_title");
const contents = document.querySelectorAll(".products_descriprion_tab");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("products_descriptions_title")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("active_tab");
      });
      target.classList.add("active_tab");

      contents.forEach((content) => {
        content.classList.remove("active_tab");
      });
      const element = document.getElementById(id);
      element.classList.add("active_tab");
    }
  };
}
