requirejs.config(config)
define(function(require){
    'use strict';
     require(['tool'],function(){
             var Vue = require('vue');
             var header = require('components/header/header');
             var nav = require('components/nav/nav');
             var input = require('components/input/input');
             var textarea = require('components/textarea/textarea');
             var filebrowser = require('components/file-browser/file-browser');
             var treediagram = require('components/tree-diagram/tree-diagram');
             //var listview = require('components/list-view/list-view');
             var listview2 = require('components/list-view2/list-view');
             new Vue({
                 el: '.page',
                 data:{
                     title1:'标题',
                     left:{
                         icon: 'icon-left'
                     },
                     items:[{
                         icon:'icon-left'
                     },{
                         icon:'icon-left'
                     }],
                     json:{
                    "AttachList":{
                        "AttachList":[
                             {"ptah":"uploaddata/2017/03/2170324173538.xls"},
                             {"ptah":"uploaddata/2017/03/24/20170324173541.jpg"}
                        ],
                         "code":"1","msg":"查询成功","name":"附件"
                    },
                    "docFile":{
                             "docFile":[
                                 {"path":"uploaddata/2017/03/24/20170324173446.doc"},
                                 {"path":"uploaddata/2017/03/24/20170324173446.doc"}
                             ],
                          "code":"1","msg":"查询成功","name":"正文"
                         }
                     },
                     json2:{"Msg":"调用成功","Code":"1","Row":[
                         {
                             "cccontent":[
                                 {"cccontent":[],"ccusername":"刘玲","child":[],"content":"好的",
                                 "ctime":"2017-03-31","deptname":"秘书处","id":"1077624",
                                "nodename":"秘书长批示", "parentid":"0","sendtype":"2",
                                     "userid":"10005798","username":"叶港"
                                 },
                                 {"cccontent":[],"ccusername":"","child":[],"content":"好的",
                                     "ctime":"2017-03-31","deptname":"秘书处","id":"1077627",
                                     "nodename":"秘书长批示","parentid":"1077624","sendtype":"1","userid":"10006163",
                                     "username":"刘玲"
                                 }],
                             "ccusername":"","child":[],"content":"好","ctime":"2017-03-24",
                             "deptname":"秘书处","id":"1077506",
                             "nodename":"副秘书长","parentid":"0","sendtype":"1","userid":"10005800","username":"邓捷"
                         },
                         {"cccontent":[],"ccusername":"","child":[],"content":"好的","ctime":"2017-03-31",
                             "deptname":"秘书处","id":"1077625",
                             "nodename":"秘书长批示","parentid":"0","sendtype":"1","userid":"10005798","username":"叶港"
                         },
                         {
                             "cccontent":[],"ccusername":"","child":[],"content":"好的","ctime":"2017-03-31",
                             "deptname":"宣传联络部","id":"1077626",
                             "nodename":"呈办部门处理","parentid":"0","sendtype":"1",
                             "userid":"10005807","username":"谌平"
                         }
                     ]},
                     json3:{"list": [
                         {
                             "sign":"jkdffwdv0e5c4019",
                             "isdelete":"1",
                             "isnotice":"0",
                             "bdel":"0",
                             "frm_content":[
                                 {
                                     "value":"测试",
                                     "prefix":"通知",
                                     "time":"2017-03-23 14:03:51",
                                     "other":"超级用户",
                                     "tcid":"1",
                                     "state1": "急",
                                     "state2": "收",
                                     "state3": "急"
                                 },{
                                     "value":"测试",
                                     "prefix":"新闻",
                                     "time":"2017-03-23 14:03:51",
                                     "other":"超级用户",
                                     "tcid":"1",
                                     "state1": "收",
                                     "state2": "重",
                                     "state3": "急"
                                 }
                             ]
                         },{
                             "sign":"jkdffwdv0e5c4019",
                             "isdelete":"0",
                             "isnotice":"0",
                             "bdel":"0",
                             "frm_content":[
                                 {
                                     "value":"测试",
                                     "prefix":"通知",
                                     "time":"2017-03-23 14:03:51",
                                     "other":"超级用户",
                                     "tcid":"1",
                                     "state1": "急",
                                     "state2": "重",
                                     "state3": "急"
                                 },{
                                     "value":"测试2",
                                     "prefix":"通知2",
                                     "time":"2017-03-23 14:03:51",
                                     "other":"超级用户",
                                     "tcid":"1",
                                     "state1": "重",
                                     "state2": "重",
                                     "state3": "急"
                                 }
                             ]
                         } ]
                     }
                 },
                 components:{
                     'v-header':new header,
                     'v-nav':new nav,
                     'v-input':new input,
                     'v-textarea':new textarea,
                     'v-filebrowser':new filebrowser,
                     'v-treediagram':new treediagram,
                     'v-listview':new listview2
                 },
                 methods:{
                     add:function(){
                     }
                 }
             });
    }); 
});