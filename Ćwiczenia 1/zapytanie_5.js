db.getCollection("cwiczenia2").find(
    {
        "birth_date": {
            "$gte": "2000-01-01"
        }
    }, 
    {
        "first_name": 1.0,
        "last_name": 1.0,
        "location.city": 1.0,
        "_id": 0.0
    }
)