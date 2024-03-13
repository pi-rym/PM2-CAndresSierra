const renderMovie = require("./renderMovie");
const axios = require("axios");

const fetchData = async () => {
    try {
       const response = await axios.get("https://students-api.up.railway.app/movies")
       response.data.forEach(renderMovie);
    } catch (error) {
       console.log(error.message);
    }
   };

   
module.exports = fetchData;