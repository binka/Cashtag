import pymongo

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['nebulae']
collection = db['tempCollection']
result = collection.find_one({})
print(result)
