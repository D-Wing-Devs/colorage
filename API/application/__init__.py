import os

from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from .resources.item import ItemInfo
from .db import db


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    api = Api(app)

    db.init_app(app)

    api.add_resource(ItemInfo, '/items')

    with app.app_context():
        db.create_all()
        return app
