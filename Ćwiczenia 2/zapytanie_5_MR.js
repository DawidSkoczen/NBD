
var db = "local";


var map = function () {
  for(var i in this.credit) {
    var key = this.credit[i].currency;
    var value = parseFloat(this.credit[i].balance);

    

    emit(key,{cnt:1,"sum": value});
  }
}
;


var reduce = function (key, values) {
    var a = values[0]; 
    for (var i=1; i < values.length; i++){
        var b = values[i];

        
        a.sum += b.sum;
        a.cnt += b.cnt;

    }

    return a;
};


var finalize = function (key, reducedValue) {

    reducedValue = {"avg":reducedValue.sum / reducedValue.cnt,"sum":reducedValue.sum};

    return reducedValue;
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
