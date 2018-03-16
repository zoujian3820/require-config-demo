/**
 * Created by Mrzou on 2017-3-29.
 * tcid     :系统规定的组件ID ref="child"
 * name     :组件描述
 * value    :默认值
 * type     :输入的类型设置，0:普通，1：只限制数字，2：电话号码，3：邮件格式，4：身份证,默认为0
 * noNull   :是否为必填项，0：不需合法认证, 1：非空，默认为0
 * legalMsg :提示非法的信息内容，默认为“非法输入
 * keyboard :软键盘设置，0:默认键盘，1：数字键盘，2：密码键盘；不填默认为0
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
        require('style!components/input/input.css');
        this.htm = require('text!components/input/input.html');
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
                type: {
                    type: Number,
                    default: 0
                },
                nonull: {
                    type: Number,
                    default: 0
                },
                legalmsg: {
                    type: String,
                    default: ""
                },
                keyboard: {
                    type: Number,
                    default: 0
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
                    default: "28px"
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
                            tha.cls = "";
                        } else if (!_is && !arg.reg) {
                            tha.cls = arg.cla;
                        } else {
                            tha.cls = arg.cla;
                            if (now == "" && non == 1) {
                                $.toast(arg.txt + '，且不能为空')
                            } else {
                                $.toast(arg.txt)
                            }
                        }
                        if (now == "")  return tha.cls = "";
                    }

                    switch (this.type) {// 0:普通，1：只限制数字，2：电话号码，3：邮件格式，4：身份证,默认为0
                        case 1:
                            caseFun(_is, {
                                reg: $.regNumber(now),
                                cla: "bg",
                                txt: this.legalmsg != "" ? this.legalmsg : "请输入数字"
                            });
                            break;
                        case 2:
                            caseFun(_is, {
                                reg: $.regMobile(now),
                                cla: "bg",
                                txt: this.legalmsg != "" ? this.legalmsg : "电话号码格式不对"
                            });
                            break;
                        case 3:
                            caseFun(_is, {
                                reg: $.regEmail(now),
                                cla: "bg",
                                txt: this.legalmsg != "" ? this.legalmsg : "邮件格式不对"
                            });
                            break;
                        case 4:
                            caseFun(_is, {
                                reg: $.validateIdCard(now),
                                cla: "bg",
                                txt: this.legalmsg != "" ? this.legalmsg : "身份证格式不对"
                            });
                            break;
                        default:
                            break;
                    }
                }
            },
            created: function () {
                switch (this.keyboard) {
                    case 1:
                        this.keyboardtype = "Number"
                        break;
                    case 2:
                        this.keyboardtype = "password"
                        break;
                    default:
                        this.keyboardtype = "text"
                        break;
                }
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
                        this.visible_hidden = 'block';
                        break;
                    default:
                        this.visible_hidden = 'hidden';
                        break;
                }
            },
            mounted: function () {
                if (this.keyboard != "") {
                    $(this.$el).find('input').attr('type', this.keyboardtype)
                }
                if (this.visible != 1) {
                    $(this.$el).find('input').attr('type', this.visible_hidden)
                }
            },
            watch: {
                val: function (now, old) {
                    if (now !== old) {
                        this.showToast(false);
                    }
                }
            },
            computed: {},
            template: this.htm
            //components: {
            //    'v-star': star
            //}
        })
        return this.template;
    }
    return MainContent;
});