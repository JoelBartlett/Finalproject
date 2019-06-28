var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendSomeoneAwesome);

function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <p class="name-card">${name} is awesome!
 <button class="remove">Remove</button></p>
 `);

  $('.name').val("");
 }

var removeButton = $('.remove');

removeButton.on("click", removeSomeone);

function removeSomeone() {
  $('.card-container').remove();
};
