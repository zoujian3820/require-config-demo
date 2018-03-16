/**
 * Created by Administrator on 2017-3-28.
 */
define(['not'],function () {
    return {
        data:function(){
            require(['jquery'],function($){
                $('.app').on('click',function(){
                    $(this).css({
                        'width':'200px',
                        'height':'60px',
                        'background':'yellow'
                    }).text('this is define test demo !!')
                })
            })
        },
        methods:function(){
           // n.init.a();
            //console.log($(window).width())
           // aFun();
        }
    };
});