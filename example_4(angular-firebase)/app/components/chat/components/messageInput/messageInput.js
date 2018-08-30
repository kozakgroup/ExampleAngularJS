class MessageInputController{
    constructor(){
        this.message = {
            user: '',
            text: ''
        }
    }

    sendMessage(){
        this.onSend({message: this.message});
        this.message.text = ''
    }

    sendOnEnter(event) {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.sendMessage()
        }   
    }
}

(() => {
    'use strict';
    
    angular
        .module('firebaseChat')
        .component('messageInput', {
            templateUrl: 'app/components/chat/components/messageInput/messageInput.html',
            controller: MessageInputController,
            controllerAs: '$ctrl',
            bindings: {
                onSend: '&',
            },
        });
})();