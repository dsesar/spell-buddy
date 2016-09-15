var css = require('./app.css')
const Vue = require('./src/vendor/vue/vue.js')

new Vue({
    el: '#spell-buddy',
    components: {
        app: require('./src/components/app.js')
    },
    compiled: function(){
        alert('test')
    }
})
