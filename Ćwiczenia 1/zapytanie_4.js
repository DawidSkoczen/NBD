db.getCollection("cwiczenia2").find(
    {
        "weight": {
            "$gte": "68"
        },
        "$and": [
            {
                "weight": {
                    "$lt": "71.5"
                }
            }
        ]
    }
)