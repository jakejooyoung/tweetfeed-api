# README #

### What is this repository for? ###


This is a barebone Twitter feed api server. It returns a feed of 30 tweets based on your search term.

Check out the demo here: https://tweetfeedmockup.com/

### How do I get set up? ###

#### 1. Clone repo ###

```
$ git clone git@github.com:jknpg/tweetfeed-api.git
```

#### 2. Install yarn package manager ###

https://yarnpkg.com/en/docs/install

#### 3. Create Twitter App ###

1. Go to https://apps.twitter.com/
2. Create Twitter App
3. Find consumer_key, consumer_secret, access_token_key, access_token_secret
4. Create a .env file at the root of this project. 
5. Declare those env variables so the app can use your account to access the twitter api.
```
// Your .env file should look something like this.
CONSUMER_KEY= 'lxdERJWfdlkjf....dkfjsERw'
CONSUMER_SECRET= 'ashrwtdlkjf....nNeRERJHFRfadsf'
ACCESS_TOKEN_KEY= '42623576547654262-....1f3465nT7u7'
ACCESS_TOKEN_SECRET= 'Tgz5325324....0gGasd5hfgjhfj'
```


#### 4. Run server ###
```
$ yarn install
$ yarn start
```

Port should open to 3000.
Try navigating to localhost:3000/tweets/. 
If everything went smoothly, you should see a list of tweets on the console. 
You can also filter recent tweets by hashtag - localhost:3000/tweets/:hashtag.

### Who do I talk to? ###
* Jooyoung Kim (jakejooyoung@gmail.com)



