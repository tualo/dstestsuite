Ext.define('Tualo.DSTestSuite.models.Check', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dstestsuite_check',
    /*
    requires: [
        'Tualo.DSTestSuite.models.Configs'
    ],
    */
    data:{
        myVariable: ''

    },
    formulas: {
        formtext: function(get){
            return  '<h2>Datenstamm: Tests</h2>';
        }
    },
    stores: {
        ds_class: {
            type: 'ds_class_store',
            autoLoad: true
        }
    }
});