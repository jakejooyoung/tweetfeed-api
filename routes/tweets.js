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
        let feed=[];
        for(let i = 0; i < data.statuses.length; i++){
          let tweet=data.statuses[i];
          let formatted = { 
            id: tweet.id_str ,
            userName:tweet.user.name,
            userHandle:tweet.user.screen_name,
            userImgUrl:tweet.user.profile_image_url,
            content:tweet.text,
          }
          console.log(formatted);
          feed.push(formatted);
        }
        return feed;
      } else {
        console.log("ERROR");
      }
      res.send(tweets);
    });
  });
};
