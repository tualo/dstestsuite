Ext.define('Tualo.routes.DSTestSuite',{
    statics: {
        load: async function() {
            return [
                {
                    name: 'DSTestSuite checkitem',
                    path: '#dstestsuite/checkitem/:{table_name}'
                }
            ]
        }
    }, 
    url: 'dstestsuite/checkitem/:{table_name}',
    handler: {
        action: function( values ){
            console.log('action');
            Ext.getApplication().addView('Tualo.DSTestSuite.Check',{
                tablename: values.table_name
            });
        },
        before: function ( values, action) {
            console.log('before');
            let fn = Ext.require, txt = 'Tualo.DSTestSuite'+'.Check';
            fn(txt,function(){
                console.log('resume');
                action.resume();
            },this);
        }

    }
});