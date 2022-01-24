const axios = require("axios");

axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=girls")
    .then(function (response)
    {
        const pps = response.data.image.original;
        console.log(response);

        
        
        

    })

    .catch(function (error)
    {
        console.log(error);
    });