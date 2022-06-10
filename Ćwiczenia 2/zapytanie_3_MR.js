// *** 3T Software Labs, Studio 3T: MapReduce Job ****


var db = "local";


var map = function () {


   emit(this.job, null);
}
;


var reduce = function(key, values) {

   var reducedValue = null;

    return key;

};

db.runCommand({ 
    mapReduce: "cwiczenia2",
    map: map,
    reduce: reduce,
    out: {"inline": 1},
    inputDB: "local",
 });
