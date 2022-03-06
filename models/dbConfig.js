const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/EU-countries",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("la base de données est bien connectée ! Bravo Vincent");
        else console.log("Il y a une erreur de connection : " + err); 
    }

)