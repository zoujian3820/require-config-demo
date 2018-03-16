//定义一个require的配置方法，
var config = {
    baseUrl: '../',
    paths  : {
        text:'js/lib/require/text',  //模板加载引擎，前面的“text”是moduleID，这里指定了路径，后面调用时只需用“text”这个ID,
        mustache:'js/lib/require/mustache',  //模板渲染引擎，渲染html模板中并返回带内容的元素节点，再添加到页面中。 
        requireCss:'js/lib/require/css.min',  //模板渲染引擎，渲染html模板中并返回带内容的元素节点，再添加到页面中。
        zepto:'js/lib/zepto/zepto.min',   
        sm:'js/lib/sm/sm.min', 
        sm_extend:'js/lib/sm/sm-extend.min',
        tool:'js/tool',
        vue:'js/lib/vue/vue',
        vuex:'js/lib/vue/vuex',
        autosize:'js/lib/autosize/autosize.min',
        Flipsnap:'js/lib/flipsnap/flipsnap',
        less:'js/lib/require/less',
        lessc:'js/lib/require/lessc',
        normalize:'js/lib/require/normalize'
    },
    less: {
        path: 'assets/styles/',
        avoidReimport: true
    },
    shim: { 
      tool : { 
        deps: ['zepto','sm','sm_extend','style!./css/lib/sm/sm.min.css',
            'style!./css/lib/sm/sm-extend.min.css','style!./css/lib/flexBox.css'],
        exports:"tool"
      }
    },
    map: {
        '*': { 
            'style': 'requireCss'
        }
    }
}