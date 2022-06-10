// *** 3T Software Labs, Studio 3T: MapReduce Job ****

// Variable for db
var __3tsoftwarelabs_db = "local";

// Variable for map
var __3tsoftwarelabs_map = function () {
    
    value = parseFloat(this.weight/((this.height)*(this.height))*10000)

    emit(this.nationality, // Or put a GROUP BY key here
         {cnt:1,
          sum: value, // the field you want stats for
          min: value,
          max: value,
          
          //,avg: 0
});
};

// Variable for reduce
var __3tsoftwarelabs_reduce = function (key, values) {
    var a = values[0]; // will reduce into here
    for (var i=1/*!*/; i < values.length; i++){
        var b = values[i]; // will merge 'b' into 'a'


        // temp helpers
       
        
        // do the reducing
        
        a.sum += b.sum;
        a.cnt += b.cnt;
        a.min = Math.min(a.min, b.min);
        a.max = Math.max(a.max, b.max);
       // var avg = a.sum/a.cnt
        //a.avg = avg
    }

    return a;
};

// Variable for finalize
var __3tsoftwarelabs_finalize = function (key, reducedValue) {

    // Enter the JavaScript code for the finalize() function here.
    // 'reducedValue' is the result of the last reduce on 'key'
    // The return value will be the result of this map-reduce job for this 'key'
    //
    // Available functions: assert(), BinData(), DBPointer(), DBRef(), doassert(), emit(), gc()
    //                      HexData(), hex_md5(), isNumber(), isObject(), ISODate(), isString()
    //                      Map(), MD5(), NumberInt(), NumberLong(), ObjectId(), print()
    //                      printjson(), printjsononeline(), sleep(), Timestamp(), tojson()
    //                      tojsononeline(), tojsonObject(), UUID(), version()
    //
    // Available properties: args, MaxKey, MinKey
    reducedValue = {"avg":reducedValue.sum / reducedValue.cnt,"min":reducedValue.min,"max":reducedValue.max};

    return reducedValue;
}
;

db.runCommand({ 
    mapReduce: "cwiczenia2",
    map: __3tsoftwarelabs_map,
    reduce: __3tsoftwarelabs_reduce,
    finalize: __3tsoftwarelabs_finalize,
    out: {"inline": 1},
    inputDB: "local",
 });
