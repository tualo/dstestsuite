Ext.define('Tualo.routes.DSTestSuite',{
    statics: {
        load: async function() {
            return [
                {
                    name: 'DSTestSuite Create FulltextSearch',
                    path: '#dstestsuite/createfts/:{table_name}'
                }
            ]
        }
    }, 
    url: 'dstestsuite/createfts/:{table_name}',
    handler: {
        action: function( values ){
            console.log('action');
            Ext.getApplication().addView('Tualo.DSTestSuite.Createfts',{
                tablename: values.table_name
            });
        },
        before: function ( values, action) {
            console.log('before');
            let fn = Ext.require, txt = 'Tualo.DSTestSuite'+'.Createfts';
            fn(txt,function(){
                console.log('resume');
                action.resume();
            },this);
        }

    }
});