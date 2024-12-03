<?php
namespace Tualo\Office\DSTestSuite\Checks;

use Tualo\Office\Basic\Middleware\Session;
use Tualo\Office\Basic\PostCheck;
use Tualo\Office\Basic\TualoApplication as App;


class Tables  extends PostCheck {
    
    public static function test(array $config){
        $clientdb = App::get('clientDB');
        if (is_null($clientdb)) return;
        $tables = [
            
            'ds'=>[],

        ];
        self::tableCheck('ds',$tables,
            "please run the following command: `./tm install-sql-dstestsuite --client ".$clientdb->dbname."`",
            "please run the following command: `./tm install-sql-dstestsuite --client ".$clientdb->dbname."`"

        );
    }
}