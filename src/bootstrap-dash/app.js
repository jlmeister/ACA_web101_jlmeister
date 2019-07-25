const apiUrl = "https://picsum.photos/v2/list"

window.onload = function() {
  $.ajax({
    url: apiUrl,
    contentType: "application/json",
    dataType: "json",
    success: function(result) {
      console.log("result", result);
    }
  })
}