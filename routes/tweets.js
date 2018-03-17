var Twitter = require("twitter"),
    config  = require('../config.js');
var twitter = new Twitter(config);

var filter = {
  q: '#fintech',
  count: 30,
  result_type: 'recent',
  lang: 'en'
}

module.exports = app => {
  app.get('/tweets', (req, res, next) => {
    const tweets = twitter.get('search/tweets', filter, function(err, data, response) {
      if(!err){
        let array=[];
        for(let i = 0; i < data.statuses.length; i++){
          let tweet=data.statuses[i];
          let formattedTweet = { 
            id: tweet.id_str ,
            userName:tweet.user.name,
            userHandle:tweet.user.screen_name,
            userImgUrl:tweet.user.profile_image_url,
            content:tweet.text,
          }
          console.log(formattedTweet);
          array.push(formattedTweet);
        }
        res.send(tweets);
      } else {
        console.log("ERROR");
        res.send(err);
      }
    });
  });
};
