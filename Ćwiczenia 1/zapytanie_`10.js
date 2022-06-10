
db.cwiczenia2.updateMany({"job": "Editor"},{"$unset":{"email":1}})

db.cwiczenia2.find({"job": "Editor"})

