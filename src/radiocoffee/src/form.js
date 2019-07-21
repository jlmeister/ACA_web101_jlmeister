function openForm() {
  document.getElementById("form").style.display = "block"
  document.getElementsByTagName("body")[0].style.position = "fixed"
}
function closeForm() {
  document.getElementById("form").style.display = "none"
  document.getElementsByTagName("body")[0].style.position = "relative"
}