db.getCollection("cwiczenia2").aggregate(


    [

        {
            $match: {

                
            }
        },


        {
            $group: {
              _id : "$job" 
            }
        }
    ],


    {

    }



);