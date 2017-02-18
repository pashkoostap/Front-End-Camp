(function() {
    window.addEventListener('load', function() {
        setChatSize();
    })

    window.addEventListener('resize', function() {
        setChatSize();
    })

    window.addEventListener('orientationchange', function() {
        setChatSize();
    })

    // CALCULATE CHAT SIZE
    function setChatSize() {
        var windowHeight = window.innerHeight,
            rightChatHeaderHeight = document.querySelector('.right-chat-header').clientHeight,
            rightChatFormHeight = document.querySelector('.right-chat-form').clientHeight,
            chatHeight,
            rightChatMessagesWrapHeight;

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
    var openUsersButton = document.querySelector('.left-chat-nav__open'),
        leftChatWrapper = document.querySelector('.left-chat-wrap');

    openUsersButton.addEventListener('click', function(e) {
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
        // LOGIN TABS
    var loginNavigation = document.querySelector('.osp-chat-form-nav'),
        loginNavigationButtons = document.querySelectorAll('.osp-chat-form-nav__btn'),
        loginFormWrap = document.querySelector('.osp-chat-form--login'),
        signInFormWrap = document.querySelector('.osp-chat-form--sign-in');

    function removeButtonsClasses() {
        loginNavigationButtons.forEach(function(btn) {
            btn.classList.remove('osp-chat-form-nav__btn--active');
        })
    }

    function changesFormsVisibility(formToShow, formToHide) {
        formToShow.classList.remove('osp-chat-form--hidden');
        formToHide.classList.add('osp-chat-form--hidden');
    }

    function addElementClass(elem, classToAdd) {
        elem.classList.add(classToAdd);
    }

    loginNavigation.addEventListener('click', function(e) {
        var clickedButton = e.target;
        if (clickedButton.className.indexOf('osp-chat-form-nav__btn--active') == -1) {
            if (clickedButton.className.indexOf('osp-chat-form-nav__btn--login') != -1) {
                removeButtonsClasses();
                addElementClass(clickedButton, 'osp-chat-form-nav__btn--active');
                changesFormsVisibility(loginFormWrap, signInFormWrap);
            } else {
                removeButtonsClasses();
                addElementClass(clickedButton, 'osp-chat-form-nav__btn--active');
                changesFormsVisibility(signInFormWrap, loginFormWrap)
            }
        }
    })

    // SHOW CHAT WRAPPER AFTER LOGIN SUBMIT
    var loginSubmitBtn = document.querySelector('.osp-chat-form__submit--login'),
        chatFormWrap = document.querySelector('.osp-chat-form-wrap'),
        chatWrapper = document.querySelector('.osp-chat');

    loginSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        addElementClass(chatFormWrap, 'osp-chat-form-wrap--hidden')
        addElementClass(chatWrapper, 'osp-chat--visible')
        setChatSize();
    })
})()