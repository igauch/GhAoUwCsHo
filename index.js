/*
 * Created by twj94 on 2017/8/2.
 */
var app=angular.module('app',['ui.router'])
.config(function ($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.when('', '/home');

    $stateProvider.state('home', {
        url: '/home',
        template: '<h1>HELLO WORLD!</h1>',
        // controller: 'home'
    }).state('directive',{
        url:'/directive',
        templateUrl:'directive.html',
        controller:'directive'
    })
});