#pip install tweepy
#cashtag
#change count to change the number of tweets returned
import datetime
import pymongo
import tweepy
import json
from pymongo import MongoClient
consumer_key = "43b4urzsW8nMY3oGzB5tIIM8B"
consumer_secret = "fbGLMhkFyipYbTAz0s0S6yrN6cDGGWnEMmNaciceYjr4sgEdP2"

access_token = "2990432317-eYMpYm2Ck2G1YBPvWEq7Mf9wdgzBlOydabaxmzN"
access_token_secret = "lQYcmiMlFdic9KSdmd6PClGQ3Swq8y9BgvVPOmqwhHjV2"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)





tweets_data_path = '/home/user/Dropbox/bigData/appleTest.txt'
tweets_data = []
tweets_file = open(tweets_data_path, "r")
#for line in tweets_file:
    #try:
        #tweet = json.loads(line)
        ##print(tweet)
        #tweets_data.append(tweet)
    #except:
        #continue



    #print(tweets_data)
#print (tweets_data[1]['text'])
#print (len(tweets_data))
with open('/home/user/Dropbox/bigData/appleTest.txt', 'r') as f:
  first_line = f.readline()

oneDocument = json.loads(first_line)

#print(oneDocument['text'])
    
client = MongoClient()
db = client['mydb']
collection = db.testData

post = tweets_data
post = oneDocument
posts = db.posts
#post_id = posts.insert(post['text'])

print(post['text'])

data = {}
data['text'] = post['text']
json_data = json.dumps(data)

post_id = posts.insert(data)



#post_id
