class FirebaseHelper {
    constructor(baseRef){
        this.baseRef = baseRef;
    }
    getRef() {
        return new Firebase.util.Scroll(this.baseRef, 'rdate');
    }
}

(() => {
    'use strict';

    angular
        .module('firebaseChat')
        .factory('FirebaseHelper', () => {
            let baseRef = new Firebase('https://testchat-cd4f7.firebaseio.com').child('messages_new');

            return new FirebaseHelper(baseRef)
        });
})();
