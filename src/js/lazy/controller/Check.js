Ext.define('Tualo.DSTestSuite.controller.Check', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dstestsuite_check',

    onReady: async function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel(),
            state = await fetch('./ds_class/state').then((response)=>{return response.json()});

        if (state.success==false){
            Ext.toast({
                html: state.msg,
                title: 'Fehler',
                align: 't',
                iconCls: 'fa fa-warning'
            });
        }


    },

});