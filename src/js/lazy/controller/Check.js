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
    checkExists: function( tablename ){
        let tablenamecase = tablename.toLocaleUpperCase().substring(0, 1) + tablename.toLowerCase().slice(1),
            model=this.getViewModel(),
            types=model.get('types'),
            basename=model.get('basename'),
            store=model.getStore('checkResult'),
            data=[];
        store.removeAll();

        Ext.Array.each(types, function(name, index) {
            try{
            console.log('typeof Ext.ClassManager.get('+basename+'.'+name+'.'+tablenamecase+')');
            if (typeof Ext.ClassManager.get(basename+'.'+name+'.'+tablenamecase) != 'function'){
                    data.push({ClassName: basename+'.'+name+'.'+tablenamecase, passed:false} )
            }else{
                data.push({ClassName: basename+'.'+name+'.'+tablenamecase, passed:true} )            
            }
        } catch(e) {
            console.error(e)
        }

        });        
        console.log(tablename, data)
        store.add(data)
    },
    checkCreate: function( tablename ){
        let tablenamecase = tablename.toLocaleUpperCase().substring(0, 1) + tablename.toLowerCase().slice(1),
            model=this.getViewModel(),
            types=model.get('types'),
            basename=model.get('basename'),
            store=model.getStore('createResult'),
            data=[];
        store.removeAll();

        Ext.Array.each(types, function(name, index) {
            // Creation
            try {
                Ext.create(basename+'.'+name+'.'+tablenamecase);
                data.push({ClassName: basename+'.'+name+'.'+tablenamecase, passed:true} )
            }catch(e){
                data.push({ClassName: basename+'.'+name+'.'+tablenamecase, passed:false} )
            }

        });        
        console.log(tablename, data)
        store.add(data)
    },

    checkRenderer: async function( tablename ){
        let tablenamecase = tablename.toLocaleUpperCase().substring(0, 1) + tablename.toLowerCase().slice(1),
        model=this.getViewModel(),
        store=model.getStore('rendererResult'),
        data=[];
        store.removeAll();
        const formData = new FormData();
        let me = this;
        let filter =[
            {"property":"table_name","value":tablenamecase,"operator":"eq"}
            //,
            // {"property":"renderer","value":'',"operator":"not"}
        ]
        formData.append("filter", JSON.stringify(filter));
        
        let res = await fetch('./ds/ds_column_list_label/read',{
            method: "POST",
            body: formData,
            }) .then((res)=>{ return res.json() });

        console.log('contr: ', res.data);  
        if (res.data.length > 0){
            Ext.Array.each(res.data, function(name, index){
                let sumrenderer = true,
                    renderer =true,
                    sumrendname='-',
                    rendname='-';
                console.log(name.renderer,name.summaryrenderer)
                if (name.summaryrenderer != ""){
                    if (typeof Ext.util.Format[name.summaryrenderer] !== 'function'){
                        sumrenderer = false
                    }
                    sumrendname = name.summaryrenderer
                }
                if (name.renderer != ""){

                    if (typeof Ext.util.Format[name.renderer] !== 'function'){
                       renderer = false
                    }
                    rendname = name.renderer
                }
                data.push({ClassName: tablenamecase +':'+name.column_name+': '+rendname+'|'+sumrendname, rendpassed:renderer,sumrendpassed:sumrenderer})
            })
        }
        console.log(tablename, data)
        store.add(data)
    }

});
/*
Ext.ClassManager.getByAlias('widget.gridcolumn')

           const formData = new FormData();
            let me = this;
            let filter =[{"property":"table_name","value":dsname,"operator":"eq"}]
            formData.append("filter", JSON.stringify(filter));

            let res = await fetch('./ds/ds_column_list_label/read',{
                method: "POST",
                body: formData,
                }).then((res)=>{ return res.json() });

            console.log(res);



*/