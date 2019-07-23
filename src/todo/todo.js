$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    let trimmed = text;
    trimmed = $.trim(text);
    console.log(text);
    if (trimmed.length >= 1) {
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    }
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });

});