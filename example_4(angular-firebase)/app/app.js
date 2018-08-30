angular
    .module('firebaseChat', ['firebase'])
    .config(['$qProvider', ($qProvider) => {
        $qProvider.errorOnUnhandledRejections(false);
    }])
