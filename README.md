# README #

### What is this repository for? ###


This is a barebone Twitter feed api server. 

It returns a feed of 30 tweets and the only parameter it can take is hashtag.


### How do I get set up? ###

#### 1. Clone repo ###

```
$ git clone git@github.com:jknpg/tweetfeed-api.git
```

#### 2. Install yarn package manager ###

https://yarnpkg.com/en/docs/install


#### 3. Run server ###
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



