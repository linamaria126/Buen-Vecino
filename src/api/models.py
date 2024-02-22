from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship, declarative_base

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
# asegurarse de que el ForeignKey no necesita o si necesita de db.

class Unidad_residencial(db.Model):
    __tablename__ = "unidad_residencial"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable = False)
    nit = db.Column(db.String(100), nullable = False)
    address = db.Column(db.String(100), nullable = False)
    phone = db.Column(db.String(30), nullable = False)
    num_apto = db.Column(db.Integer, nullable = False)
    apartamento = db.relationship('Apartamento', backref='unidad_residencial')
    residentes = db.relationship('Residentes', backref='unidad_residencial')
    publicaciones = db.relationship('Publicaciones', backref='unidad_residencial')

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "nit": self.nit,
            "address": self.address,
            "phone": self.phone,
            "num_apto": self.num_apto,
            "apartamento": self.apartamento,
            'residentes': self.residentes
        }
    

class Residentes(db.Model):
    __tablename__ = "residentes"
    id = db.Column(db.Integer, primary_key=True)
    nombres = db.Column(db.String(100), nullable = False)
    apellidos = db.Column(db.String(100), nullable = False)
    tipo = db.Column(db.String(100), nullable = False)
    cedula = db.Column(db.Integer, nullable = False)
    password = db.Column(db.String(500), nullable = False)
    email = db.Column(db.String(100), nullable = False)
    is_active = db.Column(db.Boolean, nullable = False)
    reservas = db.relationship('Reservas', backref='residentes')
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'))
    apartamento_id = db.Column(db.Integer, db.ForeignKey('apartamento.id'))
    # publicaciones = db.relationship('Publicaciones', backref='residentes')


    def serialize(self):
        return{
            "id": self.id,
            "nombres": self.nombres,
            "apellido":self.apellido,
            "tipo": self.tipo,
            "cedula": self.cedula,
            "email": self.email,
            "is_active": self.is_active,
            "unidad_residencial_id": self.unidad_residencial_id,
            "apartamento_id": self.apartamento_id,
            "publicaciones": self.publicaciones
        }
    

class Apartamento(db.Model):
    __tablename__ = 'apartamento'

    id = db.Column(db.Integer, primary_key = True)
    torre = db.Column(db.Integer, nullable = False)
    num_apto = db.Column(db.Integer, nullable = False)
    num_habitantes = db.Column(db.Integer, nullable = False)
    residentes = db.relationship('Residentes', backref='apartamento')
    # linea de abajo no tocar 
    # residentes_id = db.Column(db.Integer, db.ForeignKey('residentes.id'), nullable = False)
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'))
    vehiculos = db.relationship('Vehiculos', backref='apartamento')
    mascotas = db.relationship('Mascotas', backref='apartamento')


    def serialize(self):
        return{
            "id": self.id,
            "torre": self.torre,
            "num_apto": self.num_apto,
            "num_habitantes": self.num_habitantes,
            "residentes_id": self.residentes_id,
            "UR_id": self.UR_id
        }
    

class Vehiculos(db.Model):
    __tablename__ = 'vehiculos'
    id = db.Column(db.Integer, primary_key = True)
    placa = db.Column(db.String(10), nullable = False)
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
    hora_inicio = db.Column(db.DateTime, nullable= False)
    hora_final = db.Column(db.DateTime, nullable = False)

    residentes_id = db.Column(db.Integer, db.ForeignKey('residentes.id'))

    def serialize(self):
        return{
            "id": self.id,
            "hora_inicio": self.hora_inicio,
            "hora_final": self.hora_final,
            "residentes": self.residentes
        }
    


class Publicaciones(db.Model):
    __tablename__ = "publicaciones"
    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    contenido = db.Column(db.String(500), nullable = False)
    hora_publicacion = db.Column(db.DateTime, nullable = False)

    # residente_id = db.Column(db.Integer, db.ForeignKey('residentes.id'))
    unidad_residencial_id = db.Column(db.Integer, db.ForeignKey('unidad_residencial.id'))

    def serialize(self):
        return{
            "id": self.id,
            "contenido": self.contenido,
            "hora_publicacion": self.hora_publicacion,
            # "residente_id": self.residente_id
            
        }