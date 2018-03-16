/**
 * Created by Mrzou on 2017-3-31.
 * tcid	12	是	系统规定的组件ID
 * name	string	是	组件描述
 * value	string	是	文件名称
 * type	string	否	显示文档类型，0:office系列
 * fileURL	string	否	文档的第三方系统URL地址
 * visible	Number	否	0-隐藏，1-显示；默认为1
 * width	string	否	组件在页面的宽度， %为占页面的宽度百分比，px为占页面的宽度（建议用百分比），默认为100%
 * height	string	否	组件在页面的高度， %为占页面的宽度百分比，px为占页面的宽度。
 * textColor	string	否	字体颜色，不填写为APP默认样式
 */
requirejs.config(config);
define(function (require) {
    'use strict';
    var Vue = require('vue');
    function MainContent() {
        require('style!components/file-browser/file-browser.css');
        this.htm = require('text!components/file-browser/file-browser.html');
        this.template = Vue.extend({
            props: {
                tcid:{
                    type:Number,
                    default:12
                },
                name:{
                    type:String,
                    default:""
                },
                value:{
                    type:String,
                    default:""
                },
                type:{
                    type:String,
                    default:""
                },
                fileurl:{
                    type:Object,
                    default:Object
                },
                visible:{
                    type:Number,
                    default:1
                },
                width:{
                    type:String,
                    default:"100%"
                },
                height:{
                    type:String,
                    default:"auto"
                },
                textcolor:{
                    type:String,
                    default:"#10a6d3"
                }
            },
            methods:{
                clickopen:function(event){
                    var url  = $.urlConFig.ipAddress,pat = [],
                        inTypeFile = ['png','jpg','gif','jpeg','bmp'],
                        path = url + $(event.target).attr('savepath'),
                        name = $(event.target).html().split(".")[0],
                        suff = $(event.target).html().split(".")[1];
                        $.showIndicator();
                    if($.inArray(suff,inTypeFile) == -1) {
                        path = path.substr(0,path.lastIndexOf('.'))+'.pdf';
                        suff = 'pdf';
                        $.downLoadPath(path,name,suff);
                    }else{
                        pat.push(path)
                        $.photoView(pat);
                    }
                }
            },
            template: this.htm
        })
        return this.template;
    }
    return MainContent;
});