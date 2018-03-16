
requirejs.config({
    baseUrl: './component',
    paths: {
        'not'   : '../lib/js/not',
        'css'   : '../lib/js/css',
        'jquery': '../lib/js/jquery-1.8.3.min',
        'vue'   : '../lib/js/vue',
        'Slide' : '../lib/js/TouchSlide.1.1',
        'boots' : '../lib/js/bootstrap'
    },
    shim: {
        'not':{
           //exports: 'aFun'
            init: function(){
                return {
                    a: aFun,
                    b: bFun,
                }
            }
        },
        'boots':{
            'deps':['jquery','css!../css/bootstrap.css']
        }
    }
});

//require(['jquery','vue'],function($,Vue){
//    $('body').css('background','blue');
//    var add = {
//        template:"<div>这就是一个用例</div>"
//    }
//    new Vue({
//        el:'#app',
//        data:function(){
//            return {
//                seller:{
//                    type:Object
//                }
//            }
//        },
//        template:"<v-add></v-add>",
//        components:{
//            'v-add': add
//        }
//    })
//})