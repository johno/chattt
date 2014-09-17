var messageShow = Handlebars.compile($('#message').html());
var messageForm = Handlebars.compile($('#message-form').html())
var userForm = Handlebars.compile($('#user-form').html());

function addMessage(data, callback) {
  $('.messages').append(messageShow(data));
  callback();
}

function showMessageForm() {
  $('body').append(messageForm());
}

function hideUserForm(callback) {
  $('#user-form-wrap').hide();
  callback();
}

(function() {
  $('body').append(userForm);
})();
