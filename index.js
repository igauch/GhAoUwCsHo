/**
 * Created by twj94 on 2017/8/2.
 */
/**
 * angular.module(name, [requires], [configFn]);
 * name:    模块名,必须
 * requires:依赖的模块字符串数组
 * configFn:为模块的配置函数
 *
 * 返回的是一个angular模块
 * https://code.angularjs.org/1.6.4/docs/api/ng/type/angular.Module#
 */
var app = angular.module('app', ['ui.router'])
    /**
     * config用来定义在module初始化完成之前需要准备那些工作
     *
     * 依赖注入
     * function($scope){}  $scope不可变，不仅是函数的参数，也用来声明依赖
     * ['$scope',function(sp){}]
     *
     * angular-ui-router
     * https://ui-router.github.io/ng1/docs/latest/index.html
     */
        .config(function ($urlRouterProvider, $stateProvider) {
            /**
             * when：     对于给定的规则进行路由重定向   可以是正则表达式
             * otherwise：对未匹配到的进行路由重定向
             */
            $urlRouterProvider.when('', '/home').otherwise('home');
            /**
             * state状态配置
             */
            $stateProvider.state('home', {
                url: '/home',
                template: '<h1 class="text-center">WELCOME ANGULAR!</h1>' +
                '<h2>用来开发SPA的、吸收了MVC思想的JS框架，扩展了HTML，提供了一个非常快速的前端开发解决方案</h2>',
                controller:function ($rootScope) {
                    $rootScope.config={
                        jquery:'NG和JQUERY',
                        model:'双向数据绑定及原理',
                        directive:'指令',
                        uirouter:'uiRouter',
                        compile:'编译'
                    };
                    $rootScope.directiveClick=function (num) {
                        console.log(num);
                    };
                }
            }).state('home.directive', {
                url: '/directive',
                templateUrl: 'directive.html',
                controller: 'directive'
            }).state('jquery', {
                url: '/jquery',
                templateUrl: 'jquery.html',
                controller: 'jquery'
            }).state('model', {
                url: '/model',
                templateUrl: 'model.html',
                controller: 'model'
            })
        })
;