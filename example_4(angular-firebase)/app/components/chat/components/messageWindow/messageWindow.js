class MessageWindow {
    constructor($timeout, $element){
        this.$element = $element;
        this.$timeout = $timeout;
        this.$scrollable = this.$element.find('div[scrollable]');
    }
    $onInit() {
        this.$scrollable.bind('scroll', () => {
            if (this.$scrollable[0].scrollTop <= 50) {
                this.whenScrolled();
            }
        });
    }

    $onChanges($atts){
        if ($atts.scrollBottomOn.currentValue > 0) {
            this.$timeout(() => {
                this.$scrollable[0].scrollTop = this.$scrollable[0].scrollHeight;
            },10);
        }
    }
}

(() => {
    'use strict';
    angular
        .module('firebaseChat')
        .component('messageWindow', {
            templateUrl: 'app/components/chat/components/messageWindow/messageWindow.html',
            transclude: {
                message: 'message'
            },
            controller: MessageWindow,
            controllerAs: '$ctrl',
            bindings: {
                whenScrolled: '&',
                scrollBottomOn: '<'
            }
        });

        MessageWindow.$inject = ['$timeout','$element'];
})();
