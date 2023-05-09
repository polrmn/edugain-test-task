const openMenuBntRef = document.getElementById("menuBtn");
const closeMenuBnt = document.getElementById("close");
const menuRef = document.getElementById("menu");

openMenuBntRef.addEventListener("click", () => {
  menuRef.classList.remove("hidden");
});

closeMenuBnt.addEventListener("click", () => {
  menuRef.classList.add("hidden");
});
