from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship, declarative_base


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
# asegurarse de que el ForeignKey no necesita o si necesita de db.

class Unidad_residencial(db.Model):
    __tablename__ = "unidad_residencial"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre_unidad = db.Column(db.String(200), nullable = False)
    nit = db.Column(db.String(100), nullable = False)
    direccion = db.Column(db.String(100), nullable = False)
    telefono = db.Column(db.String(30), nullable = False)
    cant_apto = db.Column(db.Integer, nullable = False)
    cant_torres = db.Column(db.Integer, nullable = True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    apartamento = db.relationship('Apartamento', backref='unidad_residencial')
    residente = db.relationship('Residente', backref='unidad_residencial')
    publicaciones = db.relationship('Publicaciones', backref='unidad_residencial')

    def serialize(self):
        return{
            "id": self.id,
            "nombre_unidad": self.nombre_unidad,
            "nit": self.nit,
            "direccion": self.direccion,
            "telefono": self.telefono,
            "cant_apto": self.cant_apto,
            "cant_torres": self.cant_torres,
            
            "apartamento": self.apartamento,
            "residente": self.residente
        }
    

class Residente(db.Model):
    __tablename__ = "residente"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombres = db.Column(db.String(100), nullable = False)
    apellidos = db.Column(db.String(100), nullable = False)
    tipo = db.Column(db.String(100), nullable = False)
    celular = db.Column(db.String(50), nullable =False)
    cedula = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(300), nullable = False)
    is_active = db.Column(db.Boolean, nullable = False)
    reservas = db.relationship('Reservas', backref='residente')
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'))
    apartamento_id = db.Column(db.Integer, db.ForeignKey('apartamento.id'))
    # publicaciones = db.relationship('Publicaciones', backref='residente')


    def serialize(self):
        return{
            "id": self.id,
            "nombres": self.nombres,
            "apellidos":self.apellidos,
            "tipo": self.tipo,
            "celular": self.celular,
            "cedula": self.cedula,
            "email": self.email, # tener en cuenta que no aparece password.
            "is_active": self.is_active,
            "publicaciones": self.publicaciones,
            "unidad_residencial_id": self.unidad_residencial_id,
            "apartamento_id": self.apartamento_id
            
        }
    

class Apartamento(db.Model):
    __tablename__ = 'apartamento'

    id = db.Column(db.Integer, primary_key = True)
    torre = db.Column(db.Integer, nullable = False)
    num_apto = db.Column(db.Integer, nullable = False)
    num_habitantes = db.Column(db.Integer, nullable = False)
    residente = db.relationship('Residente', backref='apartamento')
    vehiculos = db.relationship('Vehiculos', backref='apartamento')
    mascotas = db.relationship('Mascotas', backref='apartamento')
    # linea de abajo no tocar 
    # residente_id = db.Column(db.Integer, db.ForeignKey('residente.id'), nullable = False)
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'), nullable =False)
    


    def serialize(self):
        return{
            "id": self.id,
            "torre": self.torre,
            "num_apto": self.num_apto,
            "num_habitantes": self.num_habitantes,
            "residente_id": self.residente_id,
            "UR_id": self.UR_id
        }
    

class Vehiculos(db.Model):
    __tablename__ = 'vehiculos'
    id = db.Column(db.String(10), primary_key = True)
    marca = db.Column(db.String(50), nullable = False)
    modelo = db.Column(db.Integer, nullable = False)
    color = db.Column(db.String(15), nullable = False)

    apartamento_id = db.Column(db.Integer, db.ForeignKey('apartamento.id'))


    def serialize(self):
        return{
            "id": self.id,
            "placa": self.placa,
            "marca": self.marca,
            "marca": self.marca,
            "color": self.color,
            "apartamento_id": self.apartamento_id
        }
    

class Mascotas(db.Model):
    __tablename__ = 'mascotas'
    id = db.Column(db.Integer, primary_key = True)
    tipo = db.Column(db.String(50), nullable = False)
    raza = db.Column(db.String(50), nullable = False)
    nombre = db.Column(db.String(100), nullable = False)

    apartamento_id = db.Column(db.Integer, db.ForeignKey('apartamento.id'))

    def serialize(self):
        return{
            "id": self.id,
            "tipo": self.tipo,
            "raza": self.raza,
            "nombre": self.nombre,
            "apartamento_id": self.apartamento_id
        }
    


class Reservas(db.Model):
    __tablename__ = "reservas"
    id = db.Column(db.Integer, primary_key=True)
    inicio = db.Column(db.DateTime, nullable= False)
    final = db.Column(db.DateTime, nullable = False)

    residente_id = db.Column(db.Integer, db.ForeignKey('residente.id'))

    def serialize(self):
        return{
            "id": self.id,
            "inicio": self.hora_inicio,
            "final": self.hora_final,
            "residente": self.residente
        }
    


class Publicaciones(db.Model):
    __tablename__ = "publicaciones"
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    contenido = db.Column(db.String(500), nullable = False)
    creacion = db.Column(db.DateTime, nullable = False)
    # residente_id = db.Column(db.Integer, db.ForeignKey('residente.id'))
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'))

    def serialize(self):
        return{
            "id": self.id,
            "contenido": self.contenido,
            "creacion": self.creacion,
            # "residente_id": self.residente_id
        }