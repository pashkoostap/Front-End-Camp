(function () {
    window.addEventListener('load', function () {
        setChatSize();
    })
    window.addEventListener('resize', function () {
        setChatSize();
    })
    window.addEventListener('orientationchange', function () {
        setChatSize();
    })
    // CALCULATE CHAT SIZE
    function setChatSize() {
        var windowHeight = window.innerHeight;
        var rightChatHeaderHeight = document.querySelector('.right-chat-header').clientHeight;
        var rightChatFormHeight = document.querySelector('.right-chat-form').clientHeight;
        var chatHeight;
        var rightChatMessagesWrapHeight;
        if (windowHeight < 1000) {
            chatHeight = 'height: ' + windowHeight + 'px;';
            rightChatMessagesWrapHeight = 'height: ' + (windowHeight - rightChatHeaderHeight - rightChatFormHeight) + 'px;';
        } else {
            chatHeight = 'height: 700px;';
            rightChatMessagesWrapHeight = 'height: 530px;';
        }

        document.querySelector('.osp-chat').setAttribute('style', chatHeight);
        document.querySelector('.right-chat-messages').setAttribute('style', rightChatMessagesWrapHeight)
    }
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