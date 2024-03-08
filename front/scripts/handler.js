const renderMovie = require("./renderMovie");

const result = () => {
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
        data.forEach(renderMovie);
      })
}


module.exports = result