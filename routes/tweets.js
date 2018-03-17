var Twitter = require("twitter"),
    config  = require('../config.js');
var twitter = new Twitter(config);

const filter = {
  q: '#fintech',
  count: 30,
  result_type: 'recent',
  lang: 'en'
}

module.exports = app => {
  app.get('/tweets', (req, res, next) => {
    const asy = async () => {
      const tweets = await loadTweets(filter);
      if (tweets) { res.send(tweets); }
    };
    asy().catch(next);
  });
  app.get('/tweets/:hashtag', (req, res, next) => {
    filter.q=req.params.hashtag;
    const asy = async () => {
      const tweets = await loadTweets(filter);
      if (tweets) { res.send(tweets); }
    };
    asy().catch(next);
  });
};

function loadTweets(filter){
  return twitter.get('search/tweets', filter, function(err, data, response) {
    if(!err){
      let feed=[];
      for(let i = 0; i < data.statuses.length; i++){
        let tweet = { 
          id: data.statuses[i].id_str ,
          userName:data.statuses[i].user.name,
          userHandle:data.statuses[i].user.screen_name,
          userImgUrl:data.statuses[i].user.profile_image_url,
          content:data.statuses[i].text,
        }
        console.log(tweet);
        feed.push(tweet);
      }
      console.log("Success");
      return feed;
    } else {
      console.log("ERROR");
      return err;
    }
  });
}