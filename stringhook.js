Java.perform(function(){
    ['java.lang.StringBuilder','java.lang.StringBuffer'].forEach(function(clazz,i){
        console.log('[?] ' + i + '=' + clazz);
        var func = 'toString';
        Java.use(clazz)[func].implementation = function(){
            var ret = this[func]();
            if (ret.toLowerCase().indexOf('webview') == 1){
                Java.perform(function(){
                    console.log("====<string>=========")
                    console.log(ret)
                    console.log("======</string>========")
                });
            }
            send('[' + i + '] ' + ret);
            return ret;
        }
    });
});