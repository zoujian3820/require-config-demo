define(function(require){
    var Vue = require('vue');
    //定义组件 模板 数据 方法
    function MainContent(){
        this.header = require('text!../../components/header/header.html');
        this.template = Vue.extend({
            template:this.header,
            props:{
                title: {
                    type: String,
                    default: ''
                },
                left:{
                    type: Object,
                    default : function () {
                       return {
                           icon: '',
                           text: ''
                       }
                    }
                },
                right:{
                    type: Object,
                    default : function () {
                        return {
                            icon: '',
                            text: ''
                        }
                    }
                }
            },
            methods:{
                onLeft:function(){
                    console.log(this.title)
                },
                onRight:function(){
                    console.log(this.title)
                },
                onTitle:function(){
                    console.log(this.title)
                }
            }
        });
        return this.template
    }     
    return MainContent;
})


