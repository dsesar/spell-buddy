module.exports = {
    data: function(){
        return require('../data.json')
    },
    template: '<h1>App Template</h1><pre>{{ $data | json }}</pre>',//require('../templates/app.html')
    compiled: function(){
        alert('test-component');
        console.log(this.$data.users);
    }
}
