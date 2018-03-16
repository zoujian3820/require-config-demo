define(function(require){
    var Vue = require('vue');
    //定义组件 模板 数据 方法
    function MainContent(){
        this.nav = require('text!../../components/nav/nav.html');
        this.template = Vue.extend({
            template:this.nav,
            props:{
                items: {
                    type: Array,
                    default: function () {
                        return []
                    }
                },
                active:{
                    type: Number,
                    default: 0
                }
            }
        });
        return this.template
    }
    return MainContent;
})


