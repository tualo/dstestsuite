Ext.define('Tualo.routes.DSTestSuite',{
    statics: {
        load: async function() {
            return [
                {
                    name: 'DSTestSuite',
                    path: '#dstestsuite/check'
                }
            ]
        }
    }, 
    url: 'dstestsuite/check',
    handler: {
        action: function( ){
            console.log('action');

            Ext.getApplication().addView('Tualo.DSTestSuite.Check');
        },
        before: function ( action,cnt) {
            console.log('before');
            let fn = Ext.require, txt = 'Tualo.DSTestSuite'+'.Check';
            fn(txt,function(){
                console.log('resume');
                action.resume();
            },this);
        }

    }
});