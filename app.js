const host = '0.0.0.0';
const port = process.env.PORT || 3000;// PUBLIC DOMAIN

var seneca = require('seneca')()
 .use('seneca-entity')
      .use('./product_catalog')
      .use('./api')
      .ready(function(){
        this.make$('product')
          .make$({id$:0,name:'Apple',price:99,star:0}).save$()
          .make$({id$:1,name:'Orange',price:199,star:0}).save$()
      })

var app = require('express')()
      .use( require('body-parser').json() )
      .use( seneca.export('web') )
      .listen(port,host)

