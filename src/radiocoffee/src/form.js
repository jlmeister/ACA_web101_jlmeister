function openForm() {
  document.getElementById("form").style.display = "block"
  document.getElementsByTagName("body")[0].style.position = "fixed"
  console.log("hi there, you opened a form.")
}
function closeForm() {
  document.getElementById("form").style.display = "none"
  document.getElementsByTagName("body")[0].style.position = "relative"
}