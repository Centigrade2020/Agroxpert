from logging import error
import pymongo
import os
from datetime import datetime
import uuid
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
            users_collection.insert_one({'_id': auth_id, "tracks": []})
        else:
            return
    except:
        print("Something went wrong")


def get_user(auth_id):
    return users_collection.find_one({'_id': auth_id})


def add_tracks(con):
    try:
        _id = uuid.uuid4()
        tracking.insert_one(
            {
                "_id": str(_id),
                "auth_id": con["auth_id"],
                "district": con["district"],
                "crop": con["crop"],
                "title": con["title"],
                "area": con["area"],
                "units": con["units"],
                "submission": datetime.now().strftime("%d/%m/%y, %H:%M:%S"),
            }
        )
        # update tracks list _id as 
        users_collection.find_one_and_update({'_id':con['auth_id']},{'$push': {'tracks': str(_id)}})
        return True
    except Exception as error:
        print(error)
        return False


def get_tracks(auth_id):
    return {"tracks":list(tracking.find({'auth_id': auth_id}))}


def delete_track(id):
    tracking.delete_one({'_id':id})
