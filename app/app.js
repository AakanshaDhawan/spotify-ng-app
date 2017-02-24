var App = angular.module('App', ['ngRoute', 'spotify', 'ngTagsInput','ui.bootstrap','angular-cardflow']);

App.directive("deferredCloak", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            attrs.$set("deferredCloak", undefined);
            element.removeClass("deferred-cloak");
        }
    };
});
