Ext.define('Tualo.DSTestSuite.Createfts', {
    //    extend: 'Ext.form.Panel',
        extend: 'Ext.panel.Panel',
        alias: 'widget.dstestsuite_createfts',
    
        initComponent: function() {
            var me = this;
            me.callParent();
            if (!Ext.isEmpty(me.config.table_name)){
                me.getViewModel().set('tablename',me.config.table_name);
            }
        },
    
        initConfig: function(config) {
            var me = this;
            me.callParent(config);
            if (!Ext.isEmpty(config.tablename)){
                me.getViewModel().set('tablename',config.tablename);
            }
        },
    
        listeners:{
          boxReady: 'onReady'
        },
        defaults: {
            anchor: '100%'
        },
        controller: 'dstestsuite_createfts',
        viewModel: {
            type: 'dstestsuite_createfts'
        },
        requires: [
            'Ext.layout.container.Card',
            'Tualo.DSTestSuite.controller.Createfts',
            'Tualo.DSTestSuite.models.Createfts'
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
                itemId: 'chooseTable',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'component',
                        cls: 'lds-container-compact',
    
                        html: '<i class="fa-solid fa-file-code"></i>'
                            + '<div><h3>Tabellenname</h3>'
                            + '<span>Bitte den Tabellennamen angeben</span></div>',
                    },{
    
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        bind:{
                            value:'{tablename}'
                        }
                    }
                ]
            },
    
            {
                xtype: 'panel',
                itemId: 'checkExists',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'component',
                        cls: 'lds-container-compact',
                        html: '<i class="fa-solid fa-file-code"></i>'
                            + '<div><h3>Check Exists </h3>'
                    },
                    {
                        xtype: 'dataview',
                        minHeight:300,
                        itemSelector: 'div.dataview-multisort-item',
                        tpl: [
                            '<table>',
                            '<tpl for=".">',
                                '<tr>',
                                    '<td><b>{ClassName}</b></td>',
                                    '<td>',
                                    '<i class="fa-regular fa-circle-check" aria-hidden="true" style="width:10px; height:10px; color:green; display:{[values.passed === true ? \'inline\':\'none\']}" ></i>',
                                    '<i class="fa-regular fa-circle-xmark" aria-hidden="true" style="width:10px; height:10px; color:red; display:{[values.passed === false ? \'inline\':\'none\']}"></i>',
                                    '</td>',
                                '</tr>',                     
                            '</tpl>',
                            
                        ],
                        bind: {
                            store:'{checkResult}'
                        }
                    }
                ]
            },
    
            {
                xtype: 'panel',
                itemId: 'checkCreate',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'component',
                        cls: 'lds-container-compact',
    
                        html: '<i class="fa-solid fa-file-code"></i>'
                            + '<div><h3>Check Creations</h3>'
                    },
                    {
                        xtype: 'dataview',
                        minHeight:300,
                        itemSelector: 'div.dataview-multisort-item',
                        tpl: [
                            '<table>',
                            '<tpl for=".">',
                                '<tr>',
                                    '<td><b>{ClassName}</b></td>',
                                    '<td>',
                                    '<i class="fa-regular fa-circle-check" aria-hidden="true" style="width:10px; height:10px; color:green; display:{[values.passed === true ? \'inline\':\'none\']}" ></i>',
                                    '<i class="fa-regular fa-circle-xmark" aria-hidden="true" style="width:10px; height:10px; color:red; display:{[values.passed === false ? \'inline\':\'none\']}"></i>',
                                    '</td>',
                                '</tr>',                     
                            '</tpl>',
                            
                        ],
                        bind: {
                            store:'{createResult}'
                        }
                    }
                ]
            },
    
    
            {
                xtype: 'panel',
                itemId: 'checkRenderer',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'component',
                        cls: 'lds-container-compact',
                        html: '<i class="fa-solid fa-money-check-dollar"></i>'
                            + '<div><h3>CheckRenderer</h3>',
                    },
                    {
                        xtype: 'dataview',
                        minHeight:300,
                        itemSelector: 'div.dataview-multisort-item',
                        tpl: [
                            '<table>',
                            '<tr><td>Tabelle:Feld</td><td>Rend</td><td>Sum.</td></tr>',
                            '<tpl for=".">',
                                '<tr>',
                                    '<td><b>{ClassName}</b></td>',
                                    '<td>',
                                    '<i class="fa-regular fa-circle-check" aria-hidden="true" style="width:10px; height:10px; color:green; display:{[values.rendpassed === true ? \'inline\':\'none\']}" ></i>',
                                    '<i class="fa-regular fa-circle-xmark" aria-hidden="true" style="width:10px; height:10px; color:red; display:{[values.rendpassed === false ? \'inline\':\'none\']}"></i>',
                                    '</td>',
                                    '<td>',
                                    '<i class="fa-regular fa-circle-check" aria-hidden="true" style="width:10px; height:10px; color:green; display:{[values.sumrendpassed === true ? \'inline\':\'none\']}" ></i>',
                                    '<i class="fa-regular fa-circle-xmark" aria-hidden="true" style="width:10px; height:10px; color:red; display:{[values.sumrendpassed === false ? \'inline\':\'none\']}"></i>',
                                    '</td>',                                
                                '</tr>',                     
                            '</tpl>',
                        ],
                        bind: {
                            store:'{rendererResult}',
                        }
                    }
                ]
            },
    
            
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
        doCardNavigation: async function(incr) {
            var me = this,
                l = me.getLayout(),
                currentId = l.activeItem.itemId;
                i = me.getCardIndex(),
                s = me.items.length,
                next = parseInt(i, 10) + incr;
    
            
    
            // me.getController().forceSelection();
    
    
            if (currentId=='chooseTable'){
                // run my functions here
                // types=me.getViewModel().get('types')
                me.getController().checkExists(me.getViewModel().get('tablename'))
                
                // Creation
                /* try {
                    Ext.create('Tualo.DataSets.list.' + tablenamecase)
                }catch{
                    alert('Liste geht nicht!');
                }*/
    
                // Tualo.DataSets.form
                // Tualo.DataSets.controller.
                // Tualo.DataSets.viewmodel
                // Tualo.DataSets.dsview
    
    
                // alert('Tralala')
                me.next(next);
                return;
    
            }else if (currentId=='checkExists'){
                me.getController().checkCreate(me.getViewModel().get('tablename'))
                const test1 = await me.getController().checkRenderer(me.getViewModel().get('tablename'));
                console.log('XXXXX ',test1)
                
                me.next(next);
                return;
            }else if (currentId=='checkRenderer'){
                console.log('checkRenderer')
                //const test1 = await me.getController().checkRenderer(me.getViewModel().get('tablename'));
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