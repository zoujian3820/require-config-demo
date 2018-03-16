/**
 * Created by Mrzou on 2017-4-5.
 * tcid	3	是	系统规定的组件ID
 * visible	Number	否	0-隐藏，1-显示；默认为1
 * textcolor	string	否	字体颜色，不填写为APP默认样式
 */
requirejs.config(config);
define(function (require) {
    'use strict';
    var Vue = require('vue');
    function MainContent() {
        require('less!components/list-view2/list-view.less');
        this.htm = require('text!components/list-view2/list-view.html');
        this.template = Vue.extend({
            props: {
                tcid:{
                    type:Number,
                    default:3
                },
                json:{
                    type:Object,
                    default:Object
                },
                visible:{
                    type:Number,
                    default:1
                },
                textcolor:{
                    type:String,
                    default:"#999"
                },
                width:{
                    type:String,
                    default:"100%"
                },
                height:{
                    type:String,
                    default:"auto"
                }
            },
            data:function(){
                return {
                    _data:''
                }
            },
            methods:{
                sliderfun:function(dom){
                    function ajax_del(){//删除ajax
                        console.log('删除')
                    }

                    function momeAlert(){// 修改
                        console.log('修改')
                    }
                    $.slideFun({
                        this:dom,
                        delete:ajax_del
                        //change:momeAlert
                    })
                }
            },
            created:function(){

            },
            mounted:function(){
                this.$nextTick(function () {
                    this.sliderfun('.sliderDelete')
                })
            },
            template: this.htm
        })
        return this.template;
    }
    return MainContent;
});
