// Расчет высоты элементов сетки

(function() {
  window.addEventListener("load", resize);
  window.addEventListener("resize", resize);

  function resize() {
    const grid = document.querySelector(".grid-layout");
    const rowHeight = getStyleValue(grid, "grid-auto-rows");
    const rowGap = getStyleValue(grid, "grid-row-gap");
    grid.style.gridAutoRows = "auto";
    grid.style.alignItems = "self-start";
    grid.querySelectorAll(".grid-item").forEach(item => {
      item.style.gridRowEnd = `span ${Math.ceil(
        (item.clientHeight + rowGap) / (rowHeight + rowGap)
      )}`;
    });
    grid.removeAttribute("style");
  }

  function getStyleValue(element, style) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(style));
  }

  allItems = document.getElementsByClassName("grid-item");
    for(x=0;x<allItems.length;x++){
       imagesLoaded( allItems[x], resize);
    }
})();
