"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Unidad_residencial, Residente, Vehiculos, Publicaciones, Mascotas, Apartamento, Reservas
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import datetime
from flask_mail import Message, Mail



api = Blueprint('api', __name__)

app = Flask(__name__)
app.config['MAIL_SERVER'] = os.environ.get("MAIL_SERVER")
app.config['MAIL_PORT']   = os.environ.get("MAIL_PORT")
app.config['MAIL_USERNAME'] = os.environ.get("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.environ.get("MAIL_PASSWORD")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

# Allow CORS requests to this API
CORS(api, origins=["*"])



@api.route('/registration', methods=['POST'])
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

    

    if nombre_unidad is None or not nombre_unidad:
        return jsonify({
            "error": "El Nombre de la Unidad residencial es requerido para crear la Unidad"
        }), 400 
    elif nit is None or not nit:
        return jsonify({
            "error": "El nit es requerido para crear la Unidad"
        }), 400
    elif direccion is None or not direccion:
        return jsonify({
            "error": "La dirección es requerido para crear la Unidad"
        }), 400
    elif  telefono is None or not telefono:
        return jsonify({
            "error": "El teléfono es requerido para crear la Unidad"
        }), 400
    elif  nombres_admin is None or not nombre_unidad:
        return jsonify({
            "error": "El Nombre del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  apellidos is None or not apellidos:
        return jsonify({
            "error": "Los apellidos del Administrador son requeridos para crear el usuario Administrador"
        }), 400
    elif  celular is None or not celular:
        return jsonify({
            "error": "El celular del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  cedula is None or not cedula:
        return jsonify({
            "error": "La cédula del Administrador es requerida para crear el usuario Administrador"
        }), 400
    elif  email is None or not email:
        return jsonify({
            "error": "El email del Administrador es requerido para crear el usuario Administrador"
        }), 400
    elif  password is None or not password:
        return jsonify({
            "error": "El email del Administrador es requerido para crear el usuario Administrador"
        }), 400
    
    hashed_passwords = generate_password_hash(password)
    new_unit_user = Unidad_residencial(nombre_unidad=nombre_unidad, nit=nit, direccion=direccion, telefono=telefono, cant_apto=cant_apto, cant_torres=cant_torres, is_active=True)
    
    db.session.add(new_unit_user)
    
    try:
        db.session.commit()

        # solución temporal al problema de la falta de admin de apts
        new_apartament = Apartamento(torre='1', num_apto='903', num_habitantes=3, unidad_residencial_id=new_unit_user.id)
        db.session.add(new_apartament)
        new_user=Residente(nombres=nombres_admin, apellidos=apellidos, celular=celular, cedula=cedula, email=email, password=hashed_passwords, is_active=True, tipo="administrador", unidad_residencial_id=new_unit_user.id)       
        db.session.add(new_user)
        
        db.session.commit()

        return jsonify({'created': True, 'id': new_unit_user.id,'nombre_unidad': new_unit_user.nombre_unidad }), 200
    except Exception as error:
        db.session.rollback()
        print(error)
        return jsonify({
            "error": "Ha ocurrido un error al intentar crear la unidad"
        }), 500
 

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
    residente_id = body.get("residente_id", None)

    if contenido is None or not contenido:
        return jsonify({'Error': 'Debes agregar un contenido a tu publicacion'}), 400
    
    if unidad_id is None or not unidad_id:
        return jsonify({'Error': 'Debes agregar el número de su unidad residencial'}), 400
    
    current_date=datetime.now()

    new_post = Publicaciones(contenido = contenido, creacion=current_date, unidad_residencial_id=unidad_id, residente_id=residente_id)
    db.session.add(new_post)

    try:
        db.session.commit()
        return jsonify("Publicacion creada")
    except Exception as error:
        db.session.rollback()
        print(error)
        return jsonify('Hubo un problema con tu publicacion'), 500
    
    

@api.route('/reservas', methods=['POST'])
def create_reservacion():
    body = request.json
    descripcion = body.get('descripcion', None)
    personas = body.get('personas', None)
    fecha = body.get('inicio', None)

    if descripcion is None :
        return jsonify({'error': 'Se necesita una descripcion de la reserva'}), 404
    
    if personas is None :
        return jsonify({'error': 'número de personas es necesario especificar'}), 404
    
    if fecha is None :
        return jsonify({'error': 'Se necesita una fecha para la reserva'}), 404
    
    new_reservacion = Reservas(descripcion=descripcion, personas=personas, inicio=fecha)

    db.session.add(new_reservacion)
    try:
        db.session.commit()
        return 'reserva enviada'
    
    except Exception as error:
        db.session.rollback()
        print(error)
        return 'Hubo un problema con tu reservacion', 500
    

    

@api.route('/userRegister/', methods=['POST'])
def create_resident():
    body=request.json

    torre=body.get("torre", None)
    num_apto=body.get("num_apto", None)
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
    raza=body.get('pet_raza', None)
    pet_nombre=body.get('pet_nombre', None)
    email=body.get('email', None)
    password=body.get('password', None)
    unidad_residencial_id=body.get('unidad_residencial_id', None)

    if torre is None or not torre:
        return jsonify({
            "error": "El número de torre es requerido para crear el usuario"
        }), 400 
    elif num_apto is None or not num_apto:
        return jsonify({
            "error": "El número de apartamento es requerido para crear el usuario"
        }), 400
    
    
    apto = Apartamento.query.filter_by(torre=torre, num_apto=num_apto, unidad_residencial_id=unidad_residencial_id).one_or_none()
    if apto is None:
        return jsonify({
            "error": "La combinación de número de apartamento y torreo no existe"
        }), 400
    
    
    if tipo is None or not tipo:
        return jsonify({
            "error": "El tipo de Residente es requerido para crear el usuario"
        }), 400
    
    if tipo !="inquilino" and tipo !="propietario" and tipo!="administrador":
        return jsonify({
            "error":"Tipo de residente no existe"
        })
    
    elif nombres is None or not nombres:
        return jsonify({
            "error": "El Nombre del Residente es requerido para crear el usuario"
        }), 400
    
    elif apellidos is None or not apellidos:
        return jsonify({
            "error": "El Apellido del Residente es requerido para crear el usuario"
        }), 400
   
    elif celular is None or not celular:
        return jsonify({
            "error": "El Celular del Residente es requerido para crear el usuario"
        }), 400
    elif cedula is None or not cedula:
        return jsonify({
            "error": "La cédula del Residente es requerido para crear el usuario"
        }), 400
    elif  email is None or not email:
        return jsonify({
            "error": "El email del Residente es requerido para crear el usuario"
        }), 400
    elif  password is None or not password:
        return jsonify({
            "error": "El email del Residente es requerido para crear el usuario"
        }), 400
    

    residente = Residente.query.filter_by(email=email).one_or_none()
    if residente:
        return jsonify({
            "error": "El residente con el email proporcionado ya se encuentra registrado"
        }), 400


    hashed_resident_passwords = generate_password_hash(password)
    new_user = Residente(tipo=tipo, nombres=nombres, apellidos=apellidos, celular=celular,is_active= False,estado= "Pendiente",
                          cedula=cedula, email=email,password=hashed_resident_passwords,
                          unidad_residencial_id=unidad_residencial_id)
    new_vehicle = Vehiculos(marca=marca_vehiculo, modelo=modelo_vehiculo, placa=placa_vehiculo, color=color_vehiculo)
    new_pet = Mascotas(tipo=pet_tipo, raza=raza, nombre=pet_nombre)

    db.session.add(new_user)
    db.session.add(new_vehicle)
    db.session.add(new_pet)

    try:
        db.session.commit()
        return jsonify('User created')
    except Exception as error:
        db.session.rollback()
        return jsonify('ha ocurrido un error'), 500
    
    
    

    
@api.route('/get/<int:residente_id>', methods=['GET'])
def get_resident(residente_id):
    user=Residente.query.filter_by(id=residente_id).one_or_none()
    
    if user is None:
        return jsonify({'Error' : 'user not found'}), 404
    
    return jsonify ({'user': user.serialize()})

@api.route('/get/users/<int:unidad_residencial_id>', methods=['GET'])
def get_all_residents_uni(unidad_residencial_id):
    print(unidad_residencial_id)
    all_residents=Residente.query.filter_by(unidad_residencial_id=unidad_residencial_id).all()
    if all_residents is None:
        return jsonify({'Error' : 'user not found'}), 404
    
    serialized_residente = [resident.serialize() for resident in all_residents]
    return jsonify({'users': serialized_residente})

@api.route('/get/unis', methods=['GET'])
def get_all_uni():
    all_uni=Unidad_residencial.query.all()
    if all_uni is None:
        return jsonify({'Error' : 'user not found'}), 404
    
    serialized_uni = [uni.serialize() for uni in all_uni]
    return jsonify({'unis': serialized_uni})
    
    
    
    
@api.route('/actualizarestado/<int:residente_id>' , methods =['PUT'])
@jwt_required()

def update_residente(residente_id):
    residente= Residente.query.get(residente_id)
    if not residente:
        return jsonify({'Error': 'Residente no encontrado'}), 404
    
    user=get_jwt_identity()
    user_admin= Residente.query.get(user['id'])
    if not user_admin:
        return "el usuario no existe", 404
    if user_admin.tipo != "administrador":
        return "no autorizado", 401
    data= request.get_json()
    if 'estado' in data:
        residente.estado = data.get('estado')
        
        try:
            db.session.commit()
            return jsonify({'mensaje': 'Usuario actualizado exitosamente', 'user': residente.serialize()}), 200
        except Exception as error:
            db.session.rollback()
            return 'Error al actualizar el estado del residente', 500
        

@api.route('/estadopendiente/<int:unidad_residencial_id>/<string:estado>' , methods =["GET"])
def get_residents_by_status(unidad_residencial_id, estado):
    residents_by_status=Residente.query.filter_by(unidad_residencial_id=unidad_residencial_id, estado=estado).all()
    if residents_by_status is None:
        return jsonify({'Error' : 'user not found'}), 404
    
    serialized_residente = [resident.serialize() for resident in residents_by_status]
    return jsonify({'users': serialized_residente})


@api.route("/login", methods=["POST"])
def user_login():
    body=request.json
    email=body.get("email", None)
    password=body.get("password", None)

    if email is None or password is None or not email:
        return jsonify({"error":"Email y password es requerido"}), 400
    
    user = Residente.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"error": "Usuario no encontrado"}), 401
    
    password_match= check_password_hash(user.password, password)
    if not password_match:
        return jsonify({"error":"password o usuario incorrecto"}), 401 
    
    token=create_access_token(identity={"email":email, "id": user.id})
    
    return jsonify({"user":user.serialize(), "token":token})


@api.route("/apartamento", methods=["POST"])
def create_apto():
    body=request.json
    torre=body.get("torre", None)
    num_apto=body.get("num_apto", None)
    num_habitantes=body.get("num_habitantes", None)
    unidad_residencial_id=body.get('unidad_residencial_id', None)

    if torre is None or num_apto is None:
        return jsonify({
            "error":"el campo es requerido para crear apartamento"
        }), 400
    new_apartament = Apartamento(torre=torre, num_apto=num_apto, num_habitantes=num_habitantes, unidad_residencial_id=unidad_residencial_id)

    db.session.add(new_apartament)

    try:
        db.session.commit()
        return 'Apto created'
    except Exception as error:
        db.session.rollback()
        print(error)
        return 'ha ocurrido un error', 500
   

@api.route("/notificacion", methods=["POST"])
def send_email():
    body=request.json
    mensaje = body.get("mensaje", None)
    html = body.get("html", None)
    url = body.get("url", None)

    print(body.get("asunto", None))
    print(body.get("para", None))
    print(mensaje)

    if html is None:
        html = email_template(url)        

    msg = Message(
        body.get("asunto", None), 
        sender = 'buen.vecino.com@gmail.com', 
        recipients = [body.get("para", None)]
        )
    # msg.body = mensaje
    msg.html = html
    mail.send(msg)
    return jsonify('Notificación enviada')

def email_template(url):
    return """"
    <p>&iexcl;Hola! &#128075;</p>

    <p>&iexcl;Bienvenido al equipo de&nbsp;<strong>Buen Vecino</strong>! &#127969;&#127775;</p>

    <p>Estamos emocionados de tenerte como administrador en nuestra plataforma. Como l&iacute;der, tienes un papel fundamental en conectar a los residentes y fomentar una comunidad activa y pr&oacute;spera.</p>

    <p>Aqu&iacute; est&aacute;n los&nbsp;<strong>pasos clave</strong>&nbsp;para comenzar:</p>

    <ol>
        <li>
        <p><strong>Registro del Administrador</strong>:</p>

        <ul>
            <li>Has dado el primer paso al registrarte como administrador en&nbsp;<strong>Buen Vecino</strong>. &iexcl;Gracias por unirte a nosotros! &#127881;</li>
        </ul>
        </li>
        <li>
        <p><strong>Invita a tus Residentes</strong>:</p>

        <ul>
            <li>Ahora es el momento de invitar a tus residentes a unirse a la comunidad. Simplemente comparte este enlace con ellos: <a href="%s">Reg&iacute;strate en Buen Vecino.</a></li>
            <li>Cuantos m&aacute;s residentes se unan, m&aacute;s vibrante ser&aacute; nuestra comunidad. &#128588;</li>
        </ul>
        </li>
        <li>
        <p><strong>Explora las Funcionalidades</strong>:</p>

        <ul>
            <li>Una vez que tus residentes se registren, podr&aacute;n:
            <ul>
                <li><strong>Conectar con Vecinos</strong>: Encuentra a otros residentes con intereses similares y establece conexiones comerciales.</li>
                <li><strong>Comprar y Vender</strong>: Explora productos y servicios locales dentro de la plataforma.</li>
                <li><strong>Eventos y Anuncios</strong>: Mantente al tanto de eventos comunitarios y anuncios importantes.</li>
                <li><strong>Reserva de espacios</strong>: Rerserva tus zonas sociales de modo r&aacute;pido y eficiente.</li>
            </ul>
            </li>
        </ul>
        </li>
        <li>
        <p><strong>Soporte Personalizado</strong>:</p>

        <ul>
            <li>Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de soporte est&aacute; aqu&iacute; para ti. No dudes en contactarnos en cualquier momento.</li>
        </ul>
        </li>
    </ol>

    <p>&iexcl;Gracias por ser parte de la familia&nbsp;<strong>Buen Vecino</strong>! &#127775;&#129309;</p>
    """  % (url)
