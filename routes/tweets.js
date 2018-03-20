var Twitter = require("twitter"),
    config  = require('../config.js');
var twitter = new Twitter(config);

const filter = {
  q: '#fintech',
  count: 30,
  result_type: 'recent',
  lang: 'en'
}

const loadTweets = async (filter, res) => {
  let data, feed;
  try {
    data = await twitter.get('search/tweets', filter);
    feed = prune(data.statuses);
  } catch (err) {
    console.log('ERROR :', err)
  }
  return res.json(feed);
}

// const loadTweets= (filter) => {
//   return new Promise((resolve, reject) => {
//     let a=twitter.get('search/tweets', filter, function(err, data, response){
//       if(!err){
//         // console.log(data.statuses);
//         resolve(data.statuses);
//       } else {
//         reject(Error("It broke"));
//       }
//   });
//     });
// };

const prune = (feed) => {
    let arr=[];
    for (let i = 0; i < feed.length; i++){
      arr.push({
        id: feed[i].id_str ,
        userName:feed[i].user.name,
        userHandle:feed[i].user.screen_name,
        userImgUrl:feed[i].user.profile_image_url,
        content:feed[i].text
      });
    }
    return arr;
};

module.exports = app => {
  app.get('/tweet', (req, res, next) => {
    loadTweets(filter,res);
  });
  app.get('/tweets', (req, res, next) => {
    loadTweets(filter,res);
  });
  app.get('/tweets/:hashtag', (req, res, next) => {
    filter.q=req.params.hashtag;
    loadTweets(filter,res);
  });
};

// module.exports = app => {
//   app.get('/tweets', (req, res, next) => {
//     loadTweets(filter).then((feed) => {
//       let prunedFeed=pruneTweets(feed);
//       res.json(prunedFeed);
//     }).catch((error) => {
//       res.status(400);
//     });
//   });
//   app.get('/tweets/:hashtag', (req, res, next) => {
//     filter.q=req.params.hashtag;
//     loadTweets(filter).then((feed) => {
//       let prunedFeed=pruneTweets(feed);
//       res.json(prunedFeed);
//     }).catch((error) => {
//       res.status(400);
//     });
//   });
// };
