


var db = "local";


var map = function () {
  for(var i in this.credit) {
    var key = this.credit[i].currency;
    var value = parseFloat(this.credit[i].balance);

    

    emit(key, value);
  }
}
;


var reduce = function (key, values) { 
  var returnValue = { balance : 0 };
  for(var i in values) {
    returnValue.balance += values[i];
  
  }
  return returnValue;
}
;

db.runCommand({ 
    mapReduce: "cwiczenia2",
    map: map,
    reduce: reduce,
    out: {"inline": 1},
    inputDB: "local",
 });
