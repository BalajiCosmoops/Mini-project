const menuToggle = document.getElementById("bar-1");
const dropdownMenu = document.getElementById("dropdown");
const sidebar=document.getElementById("sidebar-1")

menuToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
    dropdownMenu.style.display = "block";
    sidebar.style.backgroundColor="#635c5c";
  } else {
    dropdownMenu.style.display = "none";
    sidebar.style.backgroundColor="transparent";
  }
});
