db.getCollection("cwiczenia2").aggregate(


    [

        {
            $match: {

                
            }
        },


        {
            $unwind: {
                path: "$credit",
            
            }
        },


        {
            $group: {
                _id: "$credit.currency", suma: { $sum: { $toDecimal: '$credit.balance' } } 
            }
        }
    ],


    {

    }



);