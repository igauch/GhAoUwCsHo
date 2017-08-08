/*
 * Created by twj94 on 2017/8/2.
 */
/**
 * https://code.angularjs.org/1.6.4/docs/guide/directive
 * 指令：通过DOM元素上的标记指示AngularJS的HTML编译器（$compile）将指定的行为附加到该DOM元素
 * 指令的命名采用驼峰命名法，并且在调用时必须转化为-命名，即headerNav 转 header-nav
 * 指令的生命周期开始于 $compile 方法并结束于 link 方法
 */
app.directive('headerNav', function () {
    return {
        /**
         * 可选字符串参数，用以设置这个指令在DOM中以何种形式被声明
         * 默认为A（attr(当做标签属性来使用)）<div my-directive></div>
         * 可选的还有E(ele)M(注释)C(class)
         * 当然也可以组合使用，即 restrict: 'EA'
         */
        restrict: 'E',
        /**
         * （布尔型）默认为false(模板内容会加载到标签内部)，true(模板内容会替换当前标签)
         */
        replace: true,
        /**
         * 当你希望创建一个可以包含任意内容的指令时
         */
        transclude: true,
        /**
         * 当你需要其他指令的控制器支持时
         * 值为字符串或数组，代表其他控制器的名字
         * 通过前缀配置，告知查找域或处理行为，如果不配置前缀，就在本身控制器连中查找，如果找不到就抛出一个错误
         * ?   在当前控制器中查找，没有找到，会将 null 作为结果值传给 link 函数的第四个参数
         * ^   在上游的控制器链中查找
         */
        require: '^?ngModule',
        /**
         * 控制作用域
         * Boolean or Object类型,默认为false, 设置为true 时，会从父作用域继承并创建一个新的作用域对象
         * 设置为一个对象，则能设置隔离作用域
         * 可以使用“@” “=” “&”,来设置模板中数据的作用域和绑定规则
         * "@"  本地作用域属性,单项绑定，使用DOM属性的值进行绑定，字符串，因为dom属性总是字符串
         * “=”  双向绑定,本地作用域上的属性同父级作用域上的属性进行双向的数据绑定
         * “&”  提供一种方式执行一个表达式在父 scope 的上下文中
         * 如果没有指定 attr 名称，则属性名称为相同的本地名称
         */
        scope: {
            'config': '=',
            'str': '@config',
            'clickFn': '&'
        },
        /**
         * HTML模板路径或直接通过template指定一段HTML片段
         */
        templateUrl: 'header.html',
        /**
         * 创建内联控制器
         */
        controller: function ($scope,$http) {
            $scope.config = {
                jquery: 'NG和JQUERY',
                model: '双向数据绑定',
                input: '表单',
                uirouter: 'uiRouter',
                compile: '编译'
            };

            $scope.search = 'nanjing';

            $scope.searchBaidu=function () {
                /**
                 * https://code.angularjs.org/1.6.4/docs/api/ng/service/$http
                 */
                $http.get('weather/now.json',{
                    params:{key:'sspyu6aqe0seo09o',location:$scope.search,language:'zh-Hans',unit:'c'}
                }).then(function (res) {
                    console.log(res.data);
                },function (res) {
                    console.log(res);
                });
            }
        },
        /**
         * 通常在这里做DOM操作
         */
        link: function (sp, ele, att) {
            ele.css('border', '1px solid blue')
        },
        /**
         * 如果我们希望在angular进行编译之前进行dom操作，使用compile
         * compile 和 link 选项是互斥的
         * 如果同时设置了这两个选项，那么会把 compile所返回的函数当作链接函数，而 link 选项本身则会被忽略
         */
        compile: function (ele, att) {
            return function postLink(sp, ele, att, mo) {
                console.log(mo, sp.str);
                ele.css('border', '1px solid red')
            }
        }
    };
});


app.controller('model', ['$scope', '$timeout', function (sp, timeout) {
    setTimeout(function () {
        sp.model = 'GAUCH';
        /**
         * apply(exp);
         */
        sp.$apply();
    }, 1000);
    timeout(function () {
        sp.model = 'HOWSO';
    });

    sp.list = [{id: 1, name: 'gauch'}, {id: 1, name: 'gauch'}, {id: 3, name: 'gauch'}, {id: 4, name: 'howso'}];
    sp.testName = {};
    /**
     * scope下的几个方法https://docs.angularjs.org/api/ng/type/$rootScope.Scope
     *
     */
    wc&&wc();
    var wc=sp.$watch('testName', function (newVal) {
        console.log(newVal);
    }, true)
}])
    .controller('input',['$scope',function (sp) {
        
    }]);