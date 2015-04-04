#####################
# Cashtag
# Creators:  David Bittle, Lincoln Samelson, Chris Gray,
# Alex Worth, Prad Kikkeri, Kiril Novik
#####################

#To use: sudo pip install tweepy
#        sudo pip install yahoo-finance
#        Make sure to download the constituents.csv file from GitHub
import time
import csv
import tweepy
from yahoo_finance import Share
from pymongo import MongoClient
import json
consumer_key = "43b4urzsW8nMY3oGzB5tIIM8B"
consumer_secret = "fbGLMhkFyipYbTAz0s0S6yrN6cDGGWnEMmNaciceYjr4sgEdP2"

access_token = "2990432317-eYMpYm2Ck2G1YBPvWEq7Mf9wdgzBlOydabaxmzN"
access_token_secret = "lQYcmiMlFdic9KSdmd6PClGQ3Swq8y9BgvVPOmqwhHjV2"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

		
def csv_reader(file_obj):
    """
    Read a csv file
    """
    StockList = []
    reader = csv.reader(file_obj)
    for line in reader:
        stock = set(line[0].strip() for line in reader)	
        StockList.append(stock)
        #print stock	
    return StockList
		
if __name__ == "__main__":
    csv_path = "constituents.csv"
    with open(csv_path, "rb") as f_obj:
       stocklist = csv_reader(f_obj)
    
    #Change count to change the number of tweets returned
    tweetCount = 1
    #print stocklist[2]
    tweets = []
    ticker = ""
    Apple = Share('AAPL')
    
    
    print "The opening price of Apple was " + Apple.get_open() + "\n"
    results = api.search(q="#Apple #stock",count = tweetCount)
    data = [s.text.encode('results') for s in statuses]
    print data
    print "Writing to JSON file...\n"
    for result in results:
		save_file = open('tweets.json', 'a')
		save_file.write(str(results))
		print (result.text)

