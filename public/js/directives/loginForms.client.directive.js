angular.module('pipeScheme')
    .directive('psSignin', function () {
        return {
            restrict: 'E',
            scope: {
                flashmsg: '=',
                formtype: '@'
            },
            templateUrl: "../../templates/signinForm.html"
        };
    })
    .directive('psSignup', function () {
        return {
            restrict: 'E',
            scope: {
                flashmsg: '=',
                formtype: '@'
            },
            templateUrl: "../../templates/signupForm.html"
        };
    });