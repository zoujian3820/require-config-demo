define(function(require){
    var Mustache = require('mustache');
    function MainContent(obj){  
        this.template = require('text!../../template/list/list.html')
        this.init = function (obj) {   
            console.log(obj.data.items[0])
            this.template = Mustache.render(this.template,{ 
                 items:obj.data.items
            });     
            obj.this.prepend(this.template); 
        }   
    }   
    return MainContent;  
})