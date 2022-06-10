
var db = "local";


var map = function () {


    emit(this.sex, { "cnt": 1, "height": parseFloat(this.height) , "weight": parseFloat(this.weight)});
}
;


var reduce = function (key, values) {

        rv = { "cnt" : 0, "height": 0 , "weight": 0}; 
      values.forEach(function(value) {
          rv.cnt += value.cnt;
          rv.height += value.height;
          rv.weight += value.weight;
      });
      return rv;

}
;


var finalize = function (key, reducedValue) {


    var AVG_height = rv.height / rv.cnt;
    
    var AVG_weight = rv.weight / rv.cnt;

    return {AVG_height, AVG_weight};
}
;

db.runCommand({ 
    mapReduce: "cwiczenia2",
    map: map,
    reduce: reduce,
    finalize: finalize,
    out: {"inline": 1},
    inputDB: "local",
 });
