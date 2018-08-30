(() => {
    'use strict';

    angular
        .module('firebaseChat')
        .component('message', {
            templateUrl:'app/components/chat/components/message/message.html',
            bindings: {
                message: '<',
            },
        });
})();
    