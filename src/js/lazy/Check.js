Ext.define('Tualo.DSTestSuite.Check', {
//    extend: 'Ext.form.Panel',
    extend: 'Ext.panel.Panel',
    alias: 'widget.dstestsuite_check',
    listeners:{
      boxReady: 'onReady'
    },
    defaults: {
        anchor: '100%'
    },
    controller: 'dstestsuite_check',
    viewModel: {
        type: 'dstestsuite_check'
    },
    requires: [
        'Ext.layout.container.Card',
        'Tualo.DSTestSuite.controller.Check',
        'Tualo.DSTestSuite.models.Check'
    ],

    xtype: 'layout-card',
    layout: 'card',

    bodyPadding: 15,

    defaults: {
        border: false
    },

    defaultListenerScope: true,

    bbar: ['->',
           {
               itemId: 'card-prev',
               text: '&laquo; Zur&uuml;ck',
               handler: 'showPrevious',
               disabled: true
           },
           {
               itemId: 'card-next',
               text: 'Weiter &raquo;',
               handler: 'showNext'
           }
    ],

    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'lds-container-compact',

                    html: '<i class="fa-solid fa-file-code"></i>'
                        + '<div><h3>Test 1</h3>'
                        + '<span>Lipsum lorum</span></div>'
                }
            ]
        },

        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'lds-container-compact',

                    html: '<i class="fa-solid fa-file-code"></i>'
                        + '<div><h3>Test 1</h3>'
                        + '<span>Lipsum lorum</span></div>'
                }
            ]
        },

        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'lds-container-compact',

                    html: '<i class="fa-solid fa-money-check-dollar"></i>'
                        + '<div><h3>Test 1</h3>'
                        + '<span>Lipsum lorum</span></div>'
                }
            ]
        },

        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'lds-container-compact',

                    html: '<i class="fa-solid fa-money-check-dollar"></i>'
                        + '<div><h3>Test 1</h3>'
                        + '<span>Lipsum lorum</span></div>'
                }
            ]
        },

        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'lds-container-compact',

                    html: '<i class="fa-solid fa-money-check-dollar"></i>'
                        + '<div><h3>Test 1</h3>'
                        + '<span>Lipsum lorum</span></div>'
                }
            ]
        },

        
        {
            id: 'card-1',
            html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
        },
        {
            id: 'card-2',
            html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
        }
    ],

    showNext: function() {
        this.doCardNavigation(1);
    },

    showPrevious: function(btn) {
        this.doCardNavigation(-1);
    },

    getCardIndex: function(){
        var me = this,
        l = me.getLayout(),
        id = l.activeItem.itemId || l.activeItem.getId();
        return me.items.indexMap[id];
    },
    doCardNavigation: function(incr) {
        var me = this,
            l = me.getLayout(),
            currentId = l.activeItem.itemId;
            i = me.getCardIndex(),
            s = me.items.length,
            next = parseInt(i, 10) + incr;

        

        // me.getController().forceSelection();


        if (currentId=='myID'){
            // run my functions here
            me.next(next);
            return;

        }else if (currentId=='myID2'){
            // run my other functions here
            me.next(next);
            return;
        }

        
        console.log(currentId,'next',next,'current',i)
        me.next(next);
    },
    next: function(next){
        var me = this,
            l = me.getLayout();
        l.setActiveItem(next);
        me.down('#card-prev').setDisabled(next === 0);
        me.down('#card-next').setDisabled(next === s-1);

    }
});