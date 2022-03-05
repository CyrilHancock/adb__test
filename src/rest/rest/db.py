from pymongo import MongoClient
import  os
mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']
collections=db['test']
