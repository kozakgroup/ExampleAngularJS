class MainController {
    constructor(FirebaseHelper, $firebase){
        this.firebaseRef = FirebaseHelper.getRef();
        this.messages = $firebase(this.firebaseRef).$asArray();
        this.firebaseRef.scroll.next(10);
    }

    send({message}) {
        message.date = Date.now();
        message.rdate = -Date.now();
        this.messages.$add(message);
    }

    loadMore(){
       this.firebaseRef.scroll.next(10);
    }
}

(() => {
    'use strict';
    angular
        .module('firebaseChat')
        .controller('MainController', MainController);

    MainController.$inject = ['FirebaseHelper', '$firebase'];
})();