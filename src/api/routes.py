"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Unidad_residencial, Residente, Vehiculos, Publicaciones
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
# from flask_jwt_extended import JWTManager, create_access_token
from datetime import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/unidad_residencial', methods=['POST'])
def create_unit():
    
    body=request.json
   
    nombre_unidad=body.get('nombre_unidad', None)
    nit = body.get('nit', None)
    direccion=body.get('direccion', None)
    telefono=body.get('telefono', None)
    cant_apto=body.get('cant_apto', None)
    cant_torres=body.get('cant_torres', None)
    nombres_admin=body.get('nombres_admin', None)
    apellidos=body.get('apellidos', None)
    celular=body.get('celular', None)
    cedula=body.get('cedula', None)
    email=body.get('email', None)
    password=body.get('password', None)

    if nombre_unidad is None:
        return jsonify({
            "error": "El Nombre de la Unidad residencial es requerido para crear la Unidad"
        }), 400 
    elif nit is None:
        return jsonify({
            "error": "El nit es requerido para crear la Unidad"
        }), 400
    elif direccion is None:
        return jsonify({
            "error": "La dirección es requerido para crear la Unidad"
        }), 400
    elif  telefono is None:
        return jsonify({
            "error": "El teléfono es requerido para crear la Unidad"
        }), 400
    elif  nombres_admin is None:
        return jsonify({
            "error": "El Nombre del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  apellidos is None:
        return jsonify({
            "error": "Los apellidos del Administrador son requeridos para crear el usuario Administrador"
        }), 400
    elif  celular is None:
        return jsonify({
            "error": "El celular del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  cedula is None:
        return jsonify({
            "error": "La cédula del Administrador es requerida para crear el usuario Administrador"
        }), 400
    elif  email is None:
        return jsonify({
            "error": "El email del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  password is None:
        return jsonify({
            "error": "El email del Administrador es requerido para crear el usuario Administrador"
        }), 400
    
    hashed_passwords = generate_password_hash(password)
    new_unit_user = Unidad_residencial(nombre_unidad=nombre_unidad, nit=nit, direccion=direccion, telefono=telefono, cant_apto=cant_apto, cant_torres=cant_torres)
    new_user=Residente(nombres=nombres_admin, apellidos=apellidos, celular=celular, cedula=cedula, email=email, password=hashed_passwords, is_active=True)
    
    
    db.session.add(new_unit_user)
    db.session.add(new_user)
    try:
        db.session.commit()
        return 'Unit created'
    except Exception as error:
        db.session.rollback()
        return 'ha ocurrido un error', 500
 

   




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

    new_post = Publicaciones(contenido = contenido, creacion=current_date, unidad_residencial_id=unidad_id)
    db.session.add(new_post)

    try:
        db.session.commit()
        return jsonify("Publicacion creada")
    except Exception as error:
        db.session.rollback()
        return 'Hubo un problema con tu publicacion'
    

@api.route('/resident', methods=['POST'])
def create_resident():
    body=request.json

    tipo=body.get('tipo', None)
    nombres=body.get('nombres', None)
    apellidos = body.get('apellidos', None)
    celular=body.get('celular', None)
    cedula=body.get('cedula', None)
    marca_vehiculo=body.get('marca_vehiculo', None)
    modelo_vehiculo=body.get('modelo_vehiculo', None)
    placa_vehiculo=body.get('placa_vehiculo', None)
    color_vehiculo=body.get('color_vehiculo', None)
    pet_tipo= body.get('pet_tipo', None)
    pet_raza=body.get('pet_raza', None)
    pet_nombre=body.get('pet_nombre', None)
    email=body.get('email', None)
    password=body.get('password', None)

    
    if tipo is None or nombres is None or apellidos is None or celular is None or cedula is None or marca_vehiculo is None or modelo_vehiculo is None or placa_vehiculo is None or color_vehiculo is None or pet_tipo is None or pet_raza is None or pet_nombre is None or email is None or password is None:
        return{
           
            "error": "El campo es requerido para crear el Usuario"
        }, 400 

    hashed_resident_passwords = generate_password_hash(password)
    new_user = Residente(tipo=tipo, nombres=nombres, apellidos=apellidos, celular=celular, cedula=cedula, pet_tipo=pet_tipo, pet_raza=pet_raza, pet_nombre=pet_nombre, email=email, password=hashed_resident_passwords, is_active=False)

    new_vehicle = Vehiculos(marca_vehiculo=marca_vehiculo, modelo_vehiculo=modelo_vehiculo, placa_vehiculo=placa_vehiculo, color_vehiculo=color_vehiculo)

    db.session.add(new_user)
    db.session.add(new_vehicle)

    try:
        db.session.commit()
        return 'User created'
    except Exception as error:
        db.session.rollback()
        return 'ha ocurrido un error', 500
    
    
    
@api.route("/login")
    
@api.route('/get/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user=Residente.query.filter_by(id=user_id).one_or_none()
    
    if user is None:
        return jsonify({'Error' : 'user not found'}), 404
    return jsonify ({'user': user.serialize()})

    

