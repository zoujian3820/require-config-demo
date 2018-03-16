/**
 * Created by Mrzou on 2017-4-5.
 * tcid	12	是	系统规定的组件ID
 * visible	Number	否	0-隐藏，1-显示；默认为1
 * textcolor	string	否	字体颜色，不填写为APP默认样式
 */
requirejs.config(config);
define(function (require) {
    'use strict';
    var Vue = require('vue');
    function MainContent() {
        require('style!components/tree-diagram/tree-diagram.css');
        this.htm = require('text!components/tree-diagram/tree-diagram.html');
        this.template = Vue.extend({
            props: {
                tcid:{
                    type:Number,
                    default:13
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
                }
            },
            data:function(){
                return {
                    _data:''
                }
            },
            methods:{
                html_start:function (){
                    var o =$('.organize_list').height(),
                        n =$('.content').height(),
                        t =$('#getOAAttachPath').parent().height(),
                        c =$('#getOAAttachPath2').parent().height(),
                        h = $('.apply_load_bottom .apply_content:last-child').height()/2,
                        g = $("#getOAOpinion").height(),
                        d = $('#xian');
                    d.height((n-o-t-c) > g ? (n-o-t-c) : g)
                },
                penal_click:function(_data,event){
                    var hass = JSON.parse(_data);
                        this.$data._data = _data;
                    if(hass==''||hass.length <0) return $.toast('无内容');
                    $.openPanel("#panel-left-demo");
                },
                openPanelLeftPoP:function(d,that){//打开panel时加载的fun
                    var _hass = d =="" ? "":JSON.parse(d),
                        _cont = $('#panelPop'),
                        _html = '';
                    $.each(_hass,function(i,v){
                        var c = v.content+'(抄送给：'+  v.ccusername +')',
                            n = v.username,
                            d = v.deptname,
                            t = v.ctime;
                        _html += that.html_GetOAOpinion(n,d,c,t,1);
                    })
                    _cont.html(_html);
                },
                html_GetOAOpinion:function(username,deptname,content,ctime) {
                    var str =
                        '<div class="apply_content ub" style="position:relative;" >'
                        +'<div class="ub ub-f1 ub-ver">'
                        +'<div class="apply_top">'+content+'</div>'
                        +'<div class="apply_time">'+username+'('+deptname+')</div>'
                        +'<div class="apply_time">'+ctime+'</div>'
                        +'</div>'
                        +'<em class="ub ub-ac ub-pc icon" style="color:#23ceac;font-size:1rem;"></em>'
                        +'<i></i><span class="apply_guo"></span></div>';
                    return str;
                }
             },
            created:function(){
             var ht = '<div class="panel-overlay"></div>\
                       <div class="panel panel-right panel-reveal theme-dark" id="panel-left-demo">\
                         <div class="content-block" id="panelPop"></div>\
                       </div>';
               $('.page-group').append(ht);
            },
            mounted:function(){
                this.html_start();
                var that = this;
                $('#panel-left-demo').on("open closed close", function(e) {//绑定打开关闭事件
                    var data = that.$data._data;
                    if(e.type == 'open')   return that.openPanelLeftPoP(data,that);
                    if(e.type == 'closed'||e.type == 'close') return $('#panelPop').html('');
                });
            },
            template: this.htm
        })
        return this.template;
    }
    return MainContent;
});
