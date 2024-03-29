  
import os
from flask_admin import Admin
from .models import db, Unidad_residencial, Residente, Apartamento, Vehiculos, Mascotas, Reservas, Publicaciones
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    
    admin.add_view(ModelView(Unidad_residencial, db.session)),
    admin.add_view(ModelView(Residente, db.session)),
    admin.add_view(ModelView(Apartamento, db.session)),
    admin.add_view(ModelView(Vehiculos, db.session)),
    admin.add_view(ModelView(Mascotas, db.session)),
    admin.add_view(ModelView(Reservas, db.session)),
    admin.add_view(ModelView(Publicaciones, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))