var Twitter = require("twitter"),
    config  = require('./config.js');
var twitter = new Twitter(config);

var filter = {
  q: '#fintech',
  count: 30,
  result_type: 'recent',
  lang: 'en'
}

twitter.get('search/tweets', filter, function(err, data, response) {
  if(!err){
    for(let i = 0; i < data.statuses.length; i++){
    	let status=data.statuses[i];
      	let tweet = { 
      		id: status.id_str ,
      		userName:status.user.name,
      		userHandle:status.user.screen_name,
      		userImgUrl:status.user.profile_image_url,
      		content:status.text,
      	}
      console.log(tweet);
    }
  } else {
    console.log(err);
  }
})