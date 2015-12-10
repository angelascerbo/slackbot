var btcRate = 300;

//necessary code to make hubot work, put all the code we want hubot to do in this
module.exports =  function(robot) {
    
    //individual function of hubut. responds to "convert x to btc"
    robot.respond(/convert (.*) to btc/i, function(msg) {

        //leveraging object
        var userUSD = msg.match[1]; 

        //set user input to a number
        userUSD = parseFloat(userUSD); 

        //(typeof(userUSD) == 'Number') is not necessary because above line makes if truthy is number and falsy if string
        if(userUSD && (userUSD > 0)) {

            // seting btc to the output of the function usdToBTC
            var btc = usdToBTC(userUSD); 
            return msg.send(btc + ' btc :moneybag:') //:moneybag: for emoji
        } else {
            return msg.send ('We can only convert numbers')
        }

    }) 
    //end of robot.respond
};

function usdToBTC(usd) {
    var comvertedBTC = usd / btcRate;
    return convertedBTC;
}