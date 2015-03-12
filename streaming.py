#####################
# Cashtag
# Creators:  David Bittle, Lincoln Samelson, Chris Gray,
# Alex Worth, Prad Kikkeri, Kiril Novik
#####################

#To use: sudo pip install tweepy

import csv
import tweepy
from yahoo_finance import Share
consumer_key = "43b4urzsW8nMY3oGzB5tIIM8B"
consumer_secret = "fbGLMhkFyipYbTAz0s0S6yrN6cDGGWnEMmNaciceYjr4sgEdP2"

access_token = "2990432317-eYMpYm2Ck2G1YBPvWEq7Mf9wdgzBlOydabaxmzN"
access_token_secret = "lQYcmiMlFdic9KSdmd6PClGQ3Swq8y9BgvVPOmqwhHjV2"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

#Change count to change the number of tweets returned
myCount = 2
ticker = ""
Apple = Share('AAPL')
print "The opening price of Apple was " + Apple.get_open() + "\n"
results = api.search(q="#Apple #stock",count = myCount)

for result in results:
    print (result.text)


		
		
def csv_reader(file_obj):
    """
    Read a csv file
    """
    StockList = []
    reader = csv.reader(file_obj)
    for row in reader:
        stock = set(line[0].strip() for line in reader)	
        StockList.append(stock)
        print stock	
    return StockList
		
if __name__ == "__main__":
    csv_path = "constituents.csv"
    with open(csv_path, "rb") as f_obj:
        csv_reader(f_obj)

