var weatherData = {
    '11215': {
        today: {
            condition: ':partly_sunny:',
            temp: 52 
        },
        tomorrow: {
            condition: ':sunny:',
            temp: 59          
        }
    },
    '10010': {
        today: {
            condition: ':cloud:',
            temp: 54 
        },
        tomorrow: {
            condition: ':barely_sunny:',
            temp: 59           
        }
    }
}; //defining an object and setting it as variable


//necessary code to make hubot work, put all the code we want hubot to do in this
module.exports =  function(robot) {
    
    //individual function of hubut. responds to "temperature now in zip code"
    robot.respond(/temperature now in (.*)/i, function(msg) {

        //set user input
        var zipCode = msg.match[1];
        
        //leveraging object
        var forecast = weatherData[zipCode];

        //send msg back to user - access temp value for the forcast object
        var response = "The current temperature is " + forecast.today.temp + "F.";

        msg.send(response);
    });
    

    robot.respond(/temperature tomorrow in (.*)/i, function(msg) {

        var zipCode = msg.match[1],
            forecast = weatherData[zipCode],
            response = "The temperature will be " + forecast.tomorrow.temp + "F.";

        msg.send(response);
    });

    robot.respond(/weather now in (.*)/i, function(msg) {

        var zipCode = msg.match[1],
            forecast = weatherData[zipCode],
            response = "The weather is " + forecast.today.condition + " today.";

        msg.send(response);
    });

    robot.respond(/weather tomorrow in (.*)/i, function(msg) {

        var zipCode = msg.match[1],
            forecast = weatherData[zipCode],
            response = "The weather will be " + forecast.tomorrow.condition + " tomorrow.";

        msg.send(response);
    });

    robot.respond(/convert the temperature in (.*) to celsius/i, function(msg) {

        var zipCode = msg.match[1],
            forecast = weatherData[zipCode],
            temp = forecast.today.temp,
            celsius = Math.round((temp - 32) * 5/9),
            response =  "The temperature in " + zipCode + " is " + celsius +"C.";

        msg.send(response);
    });

};

