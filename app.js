var css = require('./app.css')
const Vue = require('./src/vendor/vue/vue.js')
// require('src/js/home.js')
new Vue({
    el: '#spell-buddy',
    components: {
        app: require('./src/js/components/app.js')
    },
    compiled: function(){
        alert('test')
    }
})
