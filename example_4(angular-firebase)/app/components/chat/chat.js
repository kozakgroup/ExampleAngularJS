(() => {
    'use strict';
    angular
        .module('firebaseChat')
        .component('chat', {
            templateUrl: 'app/components/chat/chat.html',
            transclude: {
                messageWindow: 'messageWindow',
                messageInput: 'messageInput'
            }
        });
})();