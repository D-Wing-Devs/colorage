from flask import request
from flask_restful import Resource


from ..db import db
from ..models.item import Item



class ItemInfo(Resource):
    def post(self):
        data = request.get_json()

        new_item = Item(**data)
        db.session.add(new_item)
        db.session.commit()

        return {'message': 'Item Added Successfully'}, 201

    def get(self):
        pass