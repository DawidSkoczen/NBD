db.getCollection("cwiczenia2").aggregate(


    [

        {
            $match: {

                
            }
        },


        {
            $group: {_id: "$sex", sredni_wzrost: { $avg: { $toDecimal: '$height' } }, srednia_waga: { $avg: { $toDecimal: '$weight' } }}
        }
    ],


    {

    }



);