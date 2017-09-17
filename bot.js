var HTTPS = require('https');

var cool = require('cool-ascii-faces');



var botID = process.env.BOT_ID;



function respond() {

  var request = JSON.parse(this.req.chunks[0]),

      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i; botRegexRules = /^\/rules/; botRegexSC = /^\/SDL/i;

      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexOW = /^\/ratings/; botRegexST = /^\/standings/;

      botRegexMX = /^\/mixer/i; botRegexPR = /^\/rankings/; botRegexRK = /^\/rookies/; botRegexTL = /^\/teamlead/;

      botRegexPL = /^\/playerlead/; botRegexBT = /^\/bot/; botRegexLG = /^\/login/; botRegexBL = /^\/blog/;

      

      



      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'

      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';

  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"

                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",

                "MIA","BUF","SF","WAS","NYJ","TB"]

  if(request.text && botRegex.test(request.text)) {

    this.res.writeHead(200);

    postMessage(cool());

    this.res.end();

    } 

     else if(request.text && botRegexDL.test(request.text)) {

    this.res.writeHead(200);

    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));

    postMessage("http://daddyleagues.com/mcflghof/team/"+request.text.substring(5,8)+"/depthchart");

    this.res.end();

  }

  else if(request.text && botRegexBT.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://www.freewebs.com/bradsdesigns/BotTutorial.html")

    this.res.end();

  }
  else if(request.text && botRegexBL.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/blog")

    this.res.end();

  }



  else if(request.text && botRegexOW.test(request.text)) {

    this.res.writeHead(200);

    postMessage("www.daddyleagues.com/maddenrating/")

    this.res.end();

  } 

  else if(request.text && botRegexST.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/standings")

    this.res.end();

  } 

  else if(request.text && botRegexPR.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/standing/ranking");

    this.res.end();

  } 

  else if(request.text && botRegexRK.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/stats/rookie");

    this.res.end();

  } 

  else if(request.text && botRegexTL.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/stats/team");

    this.res.end();

  } 

  else if(request.text && botRegexPL.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://daddyleagues.com/mcflghof/stats/player");

    this.res.end();

  } 

    else if(request.text && botRegexRules.test(request.text)) {

    this.res.writeHead(200);

    postMessage("https://www.daddyleagues.com/mcflghof/rules");

    this.res.end();

  }  
   else if(request.text && botRegexLG.test(request.text)) {

    this.res.writeHead(200);

    postMessage("https://www.daddyleagues.com/login");

    this.res.end();

  }  


  else if(request.text && botRegexSC.test(request.text)) {

    this.res.writeHead(200);

    

    postMessage("http://daddyleagues.com/mcflghof/team/"+request.text.substring(5,8)+"/schedule");

    this.res.end();

  }

  else if(request.text && botRegexP.test(request.text)) {

    this.res.writeHead(200);

    var req = request.text.substring(5,request.text.length);

    var rep = req.replace(/ /,"+");

    postMessage("http://daddyleagues.com/mcflghof/players?name="+rep+"&position=all&team=all");

    

    this.res.end();

  } 

  else if(request.text && botRegexMX.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://www.mixer.com/"+request.text.substring(8,request.text.length));

    this.res.end();

  } 

  else if(request.text && botRegexTw.test(request.text)) {

    this.res.writeHead(200);

    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));

    this.res.end();

  }    


  else {

    console.log("don't care");

    this.res.writeHead(200);

    this.res.end();

  }

}



function postMessage(response) {

  var botResponse,options, body, botReq;



  botResponse = response



  options = {

    hostname: 'api.groupme.com',

    path: '/v3/bots/post',

    method: 'POST'

  };



  body = {

    "bot_id" : botID,

    "text" : botResponse

  };



  console.log('sending ' + botResponse + ' to ' + botID);



  botReq = HTTPS.request(options, function(res) {

      if(res.statusCode == 202) {

        //neat

      } else {

        console.log('rejecting bad status code ' + res.statusCode);

      }

  });



  botReq.on('error', function(err) {

    console.log('error posting message '  + JSON.stringify(err));

  });

  botReq.on('timeout', function(err) {

    console.log('timeout posting message '  + JSON.stringify(err));

  });

  botReq.end(JSON.stringify(body));

}



function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}





exports.respond = respond;
