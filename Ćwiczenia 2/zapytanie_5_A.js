db.getCollection("cwiczenia2").aggregate(


    [

        {
            $match: {
                "sex": "Female",
                "nationality": "Poland"
                
            }
        },


        {
            $unwind: {
                path: "$credit",
            
            }
        },


        {
            $group: {
                _id: "$credit.currency", suma: { $sum: { $toDecimal: '$credit.balance' }}, srednia: { $avg: { $toDecimal: '$credit.balance' } } 
              
            }
        }
    ],


    {

    }



);