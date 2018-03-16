/**
 * Created by Mrzou on 2017-3-29.
 * tcid     :系统规定的组件ID ref="child"
 * name     :组件描述
 * value    :默认值
 * noNull   :是否为必填项，0：不需合法认证, 1：非空，默认为0
 * legalMsg :提示非法的信息内容，默认为“非法输入
 * min      :限制输入最少字符数，-1为不限制
 * max      :限制输入最大字符数，-1为不限制。不设置默认为1000
 * readonly :0-只读；1-可写；默认为0
 * visible  :0-隐藏，1-显示；默认为1
 * width    :组件在页面的宽度， %为占页面的宽度
 * height   :组件在页面的高度， px为占页面的高度
 * textColor:字体颜色，不填写为APP默认样式
 */
requirejs.config(config);
define(function (require) {
    'use strict';
    var Vue = require('vue');
    function MainContent() {
        require('style!components/textarea/textarea.css');
        var autosize = require('autosize');
        this.htm = require('text!components/textarea/textarea.html');
        this.template = Vue.extend({
            props: {
                tcid: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                value: {
                    type: String,
                    default: "输入关键字..."
                },
                nonull: {
                    type: Number,
                    default: 0
                },
                legalmsg: {
                    type: String,
                    default: "请输入内容"
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 1000
                },
                readonly: {
                    type: Number,
                    default: 0
                },
                visible: {
                    type: Number,
                    default: 1
                },
                width: {
                    type: String,
                    default: "100%"
                },
                height: {
                    type: String,
                    default: "58px"
                },
                textcolor: {
                    type: String,
                    default: "#000"
                }
            },
            data: function () {
                return {
                    val: '',
                    cls: ''
                };
            },
            methods: {
                showToast: function (_is, event) {
                    var now = this.val,
                        non = this.nonull,
                        tha = this;
                    function caseFun(_is, arg) {
                        if (_is && arg.reg || !_is && arg.reg) {
                            autosize(event.target)
                        } else if (_is && !arg.reg) {
                            if (now == "" && non == 1) {
                                $.toast(arg.txt + '，且不能为空')
                            }
                        }
                    }
                    caseFun(_is, {
                        reg: now!="",
                        txt: this.legalmsg
                    });

                }
            },
            created: function () {
                switch (this.readonly) {
                    case 1:
                        this.read = false;
                        break;
                    default:
                        this.read = true;
                        break;
                }
                switch (this.visible) {
                    case 1:
                        this.visible_hidden = true;
                        break;
                    default:
                        this.visible_hidden = false;
                        break;
                }
            },
            mounted: function () {

            },
            watch: {
                val: function (now, old) {
                    if (now == '') {
                        //this.height=28;
                    }
                }
            },
            computed: {},
            template: this.htm
        })
        return this.template;
    }
    return MainContent;
});