"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

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

@api.route('/apartment/<int:id>', methods=['GET'])
def get_apto_info():
    return{
        "msg": "aqui encuentras la informacion por apartamento"
    }

@api.route('/residente', methods=['POST'])
def create_user():
    body = request.json
    id = body.get('id', None)
    nombres = body.get('nombres', None)
    apellidos = body.get('apellido', None)
    tipo = body.get('tipo', None)
    cedula = body.get('cedula', None)
    password = body.get('password', None)
    email = body.get('email', None)
    is_active = body.get('is_active', None)
    unidad_residencial_id = body.get('unidad_residencial_id', None)
    apartamento_id = body.get('apartamento_id', None)
    publicaciones = body.get('publicaciones', None)
    
    if id is None:
        return{
            'Error': 'se requiere llenar el campo "id"'
        }
    
    if nombres is None:
        return{
            'Error': 'se requiere llenar el campo "nombres"'
        }
    
    if apellidos is None:
        return{
            'Error': 'se requiere llenar el campo "apellidos"'
        }
    
    if tipo is None:
        return{
            'Error': 'se requiere llenar el campo "tipo"'
        }
    
    if cedula is None:
        return{
            'Error': 'se requiere llenar el campo "cedula"'
        }
    
    if password is None:
        return{
            'Error': 'se requiere llenar el campo "password"'
        }
    
    if email is None:
        return{
            'Error': 'se requiere llenar el campo "email"'
        }
    
    if is_active is None:
        return{
            'Error': 'se requiere llenar el campo "is_active"'
        }
    
    if unidad_residencial_id is None:
        return{
            'Error': 'se requiere llenar el campo "unidad_residencial_id"'
        }
    
    if apartamento_id is None:
        return{
            'Error': 'se requiere llenar el campo "apartamento_id"'
        }
    
    if publicaciones is None:
        return{
            'Error': 'se requiere llenar el campo "publicaciones"'
        }
    
   