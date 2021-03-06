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
        .config(function ($urlRouterProvider, $stateProvider, $sceDelegateProvider) {
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
                template: '<input ng-model="angular" class="form-control">'+
                /**
                 * angular表达式写在{{}}模板标记里
                 * 表达式支持计算和三元运算符等
                 */
                '<h1 class="text-center">WELCOME {{angular}}!</h1>' +
                '<h2>用来开发SPA的、吸收了MVC思想的JS框架，扩展了HTML，提供了一个非常快速的前端开发解决方案</h2>'+
                '<a ui-sref="jquery({param1: 123})">传参转跳jQuery</a>'+
                '<a href="https://docs.angularjs.org/api" target="_blank">ANGULAR官方文档</a>',
                controller:function ($scope,$rootScope,resolveFactory) {
                    console.log(resolveFactory);
                    $scope.angular='ANGULAR';
                    $rootScope.directiveClick = function (num) {
                        console.log(num);
                    };
                },
                /**
                 * 预加载
                 * resolve属性里的值会在路由成功前被预先设定好，然后注入到控制器中
                 */
                resolve:{
                    resolveFactory:function () {
                        return '我是通过路由的resolve注册的服务';
                    }
                }
            }).state('jquery', {
                /**
                 * 参数占位符
                 */
                url: '/jquery?param1',
                templateUrl: 'jquery.html'
            }).state('model', {
                url: '/model',
                templateUrl: 'model.html',
                controller: 'model'
            }).state('input',{
                url:'/input',
                templateUrl:'input.html',
                controller:'input'
            });
        })
;