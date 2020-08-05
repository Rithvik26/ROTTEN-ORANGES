(function () {

    angular.module('meanApp', ['ngRoute','ng-sweet-alert']);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
    }

   /*function run($rootScope, $location, authentication) {
        console.log('Inside Run Function');
        $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
          //This code is not helping to prevent illegal login
          if (!($location.path() === '/' || $location.path() === '/register' || $location.path() === '/login') && !authentication.isLoggedIn()) {
            console.log('Checking if logged in-1');
            $location.path('/');
          }else if(($location.path() === '/' || $location.path() === '/register' || $location.path() === '/login') && authentication.isLoggedIn()){ //Change by Rohith
            console.log('Checking if logged in-2');
            $location.path('/main');
          }*/

    angular
        .module('meanApp')
        
        .config(['$routeProvider', '$locationProvider', config])
        //.run(['$rootScope', '$location', 'authentication', run]);

})();