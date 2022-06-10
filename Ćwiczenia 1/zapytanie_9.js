

db.cwiczenia2.update(
  {"first_name": "Antonio"},
  { $set: {"hobby": "pingpong"} },
  false,
  true
)

db.cwiczenia2.find({"first_name": "Antonio"})