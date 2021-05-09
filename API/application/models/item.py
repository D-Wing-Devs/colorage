from ..db import db

'''
    {
      "id": 12,
      "imageUrl": 
      "color": {hex: "#000", display: "black"},
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSize": "S",
      "price": 10.9,
      "currencyFormat": "$",
      "isFreeShipping": true
    }
'''

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    imageUrl = db.Column(db.String(400))
    colorHex = db.Column(db.String(7))
    colorDisplay = db.Column(db.String(50))
    title = db.Column(db.String(100))
    description = db.Column(db.String(400))
    availableSize = db.Column(db.String(5))
    price = db.Column(db.Float(5))
    currencyFormat = db.Column(db.String(5))
    isFreeShipping = db.Column(db.Boolean)


    def to_json(self):
        return {
            'id': self.id,
            'imageUrl': self.imageUrl,
            'color': {'hex': self.colorHex, 'display' : self.colorDisplay},
            'title': self.title,
            'description': self.description,
            'availableSize': self.availableSize,
            'price': self.price,
            'currencyFormat': self.currencyFormat,
            'isFreeShipping': self.isFreeShipping
        }
