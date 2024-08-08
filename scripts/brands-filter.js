document.addEventListener("DOMContentLoaded", function () {
  const filterList = document.querySelectorAll(
    ".brands_filter_list p, .all_brands_filter p"
  );
  const brandItems = document.querySelectorAll(".brand_item");
  const showAllBrands = () => {
    brandItems.forEach((item) => {
      item.style.display = "block";
    });
  };

  showAllBrands();

  filterList.forEach((filter) => {
    filter.addEventListener("click", () => {
      const filterText = filter.textContent.trim();
      if (filterText === "All Brands") {
        showAllBrands();
      } else if (filterText === "#") {
        brandItems.forEach((item) => {
          const brandName = item.querySelector("p").textContent.trim();
          if (!isNaN(brandName.charAt(0))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else {
        brandItems.forEach((item) => {
          const brandName = item.querySelector("p").textContent.trim();
          if (brandName.charAt(0).toUpperCase() === filterText) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });
});
