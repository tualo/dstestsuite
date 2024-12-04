Ext.define('Tualo.DSTestSuite.models.Check', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dstestsuite_check',
    /*
    requires: [
        'Tualo.DSTestSuite.models.Configs'
    ],
    */
    data:{
        myVariable: '',
        tablename:'mengeneinheiten',
        basename: 'Tualo.DataSets',
        types:['model','store','list','form','controller','viewmodel','dsview']
    },
    formulas: {
        formtext: function(get){
            return  '<h2>Datenstamm: Tests</h2>';
        }
    },
    stores: {
        checkResult: {
            type: 'array',
            fields: [
                {name: 'ClassName', type: 'string'},
                {name: 'passed', type: 'boolean'}
            ],
        },
        createResult:{
            type: 'array',
            fields: [
                {name: 'ClassName', type: 'string'},
                {name: 'passed', type: 'boolean'}
            ],
        },
        rendererResult:{
            type: 'array',
            fields: [
                {name: 'ClassName', type: 'string'},
                {name: 'passed', type: 'boolean'}
            ],
        }
    }
   
});