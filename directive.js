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
         * 控制作用域
         * Boolean or Object类型,默认为false, 设置为true 时，会从父作用域继承并创建一个新的作用域对象
         * 设置为一个对象，则能设置隔离作用域
         * 可以使用“@” “=” “&”,来设置模板中数据的作用域和绑定规则
         * "@"  本地作用域属性：使用当前指令中的数据和DOM属性的值进行绑定
         * “=”  双向绑定：本地作用域上的属性同父级作用域上的属性进行双向的数据绑定
         * “&”  父级作用域绑定：通过 & 符号可以对父级作用域进行绑定
         //例如
         //scope: {
            //    ngModel: '=', // 将ngModel同指定对象绑定
            //    onSend: '&', // 将引用传递给这个方法
            //    fromName: '@' // 储存与fromName相关联的字符串
            //}
         */
        scope: {
            'config': '='
        },
        /**
         * HTML模板路径或直接通过template指定一段HTML片段
         */
        templateUrl: 'header.html'
    };
});