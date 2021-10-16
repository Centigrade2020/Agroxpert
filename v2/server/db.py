import pymongo
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

DBSTRING = os.getenv("DB_STRING")
client = pymongo.MongoClient(DBSTRING)


userdb = client.get_database('UserDB')
TrackerDB = client.get_database("TrackingDB")
users_collection = userdb.get_collection('users')
tracking = TrackerDB.get_collection("trackings")


def save_user(auth_id):
    try:
        user = users_collection.find_one({'_id': auth_id})
        if user is None:
            users_collection.insert_one({'_id': auth_id})
        else:
            return
    except:
        print("Something went wrong")


def get_user(auth_id):
    return users_collection.find_one({'_id': auth_id})


def add_tracks(auth_id, district, crop):
    tracking.insert_one(
        {
            "_id": auth_id,
            "district": district,
            "crop": crop,
            "submission": datetime.now().strftime("%d/%m/%y, %H:%M:%S")
        }
    )


def get_tracking(auth_id):
    return tracking.find_one({'_id': auth_id})
