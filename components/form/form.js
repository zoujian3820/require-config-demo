define(function(require){
    var Mustache = require('mustache');
    function MainContent(obj){  
        this.template = require('text!../../template/form/form.html')
        this.init = function (obj) {    
            this.template = Mustache.render(this.template,{ 
                items:obj.data.items
            });  
            obj.this.prepend(this.template); 
        }   
    }   
    return MainContent;  
})