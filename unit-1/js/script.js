(function () {
    // OPEN CHAT USERS
    var openUsersButton = document.querySelector('.left-chat-nav__open');
    var leftChatWrapper = document.querySelector('.left-chat-wrap');
    openUsersButton.addEventListener('click', function (e) {
        var self = this;
        if (self.className.indexOf('left-chat-nav__open--active') == -1) {
            self.classList.add('left-chat-nav__open--active');
            leftChatWrapper.classList.remove('left-chat-wrap--hidden');
            leftChatWrapper.classList.add('left-chat-wrap--visible');
        } else {
            self.classList.remove('left-chat-nav__open--active');
            leftChatWrapper.classList.remove('left-chat-wrap--visible');
            leftChatWrapper.classList.add('left-chat-wrap--hidden');
        }
        
    })
})()