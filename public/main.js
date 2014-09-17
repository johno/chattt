$(function() {
  var messages = $('.messages');
  var inputMessage = $('.message-input');

  var username;
  var connected = false;
  var typing = false;
  var currentInput = $('.username-input').focus();

  var socket = io();

  function setUsername() {
    username = $('.username-input').val().trim();

    if (username) {
      hideUserForm(function() {
        showMessageForm();
        currentInput = inputMessage.focus();
        socket.emit('add user', username);
      });
    }
  }

  function sendMessage() {
    var message = $('.message-input').val();

    if (message && connected) {
      addMessage({
        username: username,
        message: message
      }, function() {
        $('.message-input').val('');
        $('.message-input').focus();
        typing = false;
      });

      socket.emit('stop typing');
      socket.emit('new message', message);
    }
  }

  $(window).keydown(function (event) {
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      currentInput.focus();
    }
    if (event.which === 13) {
      if (connected) {
        sendMessage();
      } else {
        setUsername();
      }
    }
  });

  socket.on('login', function (data) {
    connected = true;
  });

  socket.on('new message', function (data) {
    addMessage(data, function() {
      $('.message-input').focus();
    });
  });

  socket.on('user joined', function (data) {
  });

  socket.on('user left', function (data) {
  });

  socket.on('typing', function (data) {
  });

  socket.on('stop typing', function (data) {
  });
});
