"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Publicaciones
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/', methods=[ 'GET'])
def get_info():
    return{
        "msg": "de aqui deberias poder acceder a toda la informacion"
    }

@api.route('/publicaciones/<int:unidad_id>', methods=['GET'])
def get_publicaciones(unidad_id):
    post = Publicaciones.query.filter_by(unidad_residencial_id = unidad_id).all()
    all_items =[
        item.serialize() for item in post
    ]
    return jsonify(all_items)

    
    

    
        
    

  
    
@api.route('/publicaciones', methods=['POST'])
def create_post():
    body= request.json
    contenido=body.get('contenido', None)
    unidad_id = body.get("unidad_residencial_id", None)

    if contenido is None:
        return jsonify({'Error': 'Debes agregar un contenido a tu publicacion'}), 400
    
    if unidad_id is None:
        return jsonify({'Error': 'Debes agregar el numero de su unidad residencial'}), 400
    
    current_date=datetime.now()

    new_post = Publicaciones(contenido = contenido, hora_publicacion=current_date, unidad_residencial_id=unidad_id)
    db.session.add(new_post)

    try:
        db.session.commit()
        return jsonify("Publicacion creada")
    except Exception as error:
        db.session.rollback()
        return 'Hubo un problema con tu publicacion'
    

   