#####################
# Cashtag
# Creators:  David Bittle, Lincoln Samelson, Chris Gray,
# Alex Worth, Prad Kikkeri, Kiril Novik
#####################

#To use: sudo pip install tweepy
#        sudo pip install pymongo
#        sudo pip install yahoo-finance
#        Make sure to download the constituents.csv file from GitHub
import time
import csv
import tweepy
from yahoo_finance import Share
from pymongo import MongoClient
consumer_key = "43b4urzsW8nMY3oGzB5tIIM8B"
consumer_secret = "fbGLMhkFyipYbTAz0s0S6yrN6cDGGWnEMmNaciceYjr4sgEdP2"

access_token = "2990432317-eYMpYm2Ck2G1YBPvWEq7Mf9wdgzBlOydabaxmzN"
access_token_secret = "lQYcmiMlFdic9KSdmd6PClGQ3Swq8y9BgvVPOmqwhHjV2"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
# file name that you want to open is the second argument
save_file = open('tweets.json', 'a')

class CustomStreamListener(tweepy.StreamListener):
    def __init__(self, api):
        self.api = api
        super(tweepy.StreamListener, self).__init__()

        self.save_file = tweets

    def on_data(self, tweet):
		Apple = Share('AAPL')
		results = api.search(q="#Apple #stock",count = myCount)
		print results
		self.save_file.append(json.loads(tweet))
		save_file.write(str(results))
