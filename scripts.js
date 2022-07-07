function initThemeSelector() {
  const themeSelector = document.getElementById("themeSelector");
  const themeLink = document.getElementById("themeLink");
  const currentTheme = localStorage.getItem("theme") || "default";

  function activateTheme(themeName) {
    themeLink.setAttribute("href", `css/theme/${themeName}.css`);
  }
  themeSelector.addEventListener("change", () => {
    activateTheme(themeSelector.value);
    localStorage.setItem("theme", themeSelector.value);
  });

  themeSelector.value = currentTheme;
  activateTheme(currentTheme);
}

initThemeSelector();
