document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("div");
  toggle.classList.add("menu-toggle");
  toggle.innerHTML = "☰";
  document.querySelector("nav .container").appendChild(toggle);

  const links = document.querySelector(".page-links");
  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
