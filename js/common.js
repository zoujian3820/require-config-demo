var aaaa ;
requirejs.config(config)
define(function(require){     
    function MainContent(obj){ 
        var Vue = require('vue'),
            _Header = obj.header,
            _Nav = obj.nav,
            $content = '';
            _Header = _Header.data;
        if(_Header){
            header = require('../../template/header/header.js');
            $setPonent('header');
        }
        function $setPonent(key,v) {
            $content += '{\'v-'+key+'\':new '+ key+'}'
        }
        components = eval('('+$content+')')
        var my = new Vue({
            el: '.page',
            data:{
                title1:'标题',
                left:{
                    icon: 'icon-left'
                }
            },
            components:components,
            methods:{
                add:function(){
                    this.$children[0].onRight()
                    console.log()
                }
            },
            beforeCreate:function(){
                $('.page').append('<v-header :title="title1"  :left="left"></v-header>')
            }
        });

    }  
    return MainContent;
})