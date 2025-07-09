const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown");

menuToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});
