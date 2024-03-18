# Plataforma Buen Vecino


## Vista Previa - Portada principal


![image](https://github.com/linamaria126/Buen-Vecino/assets/66230572/f3e3ef76-52c5-410e-b285-28d341256279)






## Índice:

1. Descripción del Proyecto
2. Estado del Proyecto
3. Demostración de funciones y aplicaciones
4. Acceso al proyecto
5. Personas contribuyéntes
6. Personas desarrolladoras del Proyecto

### Descripción del Proyecto:

**Buen Vecino** Es una aplicación creada para ser empleada por las Unidades Residenciales. Permite que los Residentes que forman parte de una Unidad Residencial se conecten entre sí para la compra y venta de Servicios, dentro de su misma Unidad Residencial o Condominio, generando con esto una *Comunidad Colaborativa*, y una mejora de la economía de los integrantes de la Comunidad. Lo cual no solo favorecería a los miembros de la Unidad  sinó también a la Unidad residencial como tal, puesto que al contribuír de modo positivo en la economía de los hogares permitirá un mejor flujo y  facilitará  el cumplimiento de las responsabilidades como el pago de la cuota de la Admnistración. 

Para ser parte de *Buen Vecino* Se requiere inialmente que la Unidad Residencial se registre en la plataforma, al igual que el administrador de la Unidad o Conjunto Residencial. 

![image](https://github.com/linamaria126/Buen-Vecino/assets/66230572/97859994-6c73-4ad4-aa70-3d15304bf789)<br>
Formulario de Registro de Unidad Residencial y Administrador de la Unidad.


Posterior al registro de la Unidad, le llegará un correo a el administrador con los pasos siguientes, dentro de los cuales tendrá un Link que podrá  distribuír entre los miembros de la Unidad residencial, para invitarlos a formar parte de *Buen Vecino* , como residente de su Unidad Residencial. 

![image](https://github.com/linamaria126/Buen-Vecino/assets/66230572/562b5a4a-daae-4a6c-882e-c982f03d31a0)
Correo que llegará posterior al registro de una Unidad Residencial en Buen Vecino

Para que un Residente sea parte de Buen Vecino, deberá contar con la aprobación de la administración, esto garantizará que quienes formen parte de la comunidad *Buen Vecino* De cierta Unidad Residencial sean vecinos entre ellos, y permitirá a la vez brindar seguridad y confianza a la plataforma.

Cuando un Residente recibe y le da click a el link enviado por la la Administración accederá al registro de Usuario de Residente, dentro del cual deberá incluír los datos importantes para el manejo de las bases de datos de la Unidad Residencial, como son: número de apartamento y torre al que pertenece, cantidad de personas que habitan su casas o apartamento, nombre, raza y tipo de mascota(s) Placa, marca y color de vehículo, número de parqueadero, teléfono, entre otros datos de importancia para la adecuada gestión administrativa. Después de introducir y enviar la información, requerirá de la aprobación de la administración para poder dar uso a la plataforma *Buen Vecino* 

![image](https://github.com/linamaria126/Buen-Vecino/assets/66230572/a3560fea-3aff-46dc-a254-f1448bc83464)



Build web applications using React.js for the front end and python/flask for your backend API.

- Documentation can be found here: https://start.4geeksacademy.com/starters/react-flask
- Here is a video on [how to use this template](https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b)
- Integrated with Pipenv for package managing.
- Fast deployment to heroku [in just a few steps here](https://start.4geeksacademy.com/backend/deploy-heroku-posgres).
- Use of .env file.
- SQLAlchemy integration for database abstraction.

### 1) Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Undo a migration

You are also able to undo a migration by running

```sh
$ pipenv run downgrade
```

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

### **Important note for the database and the data inside it**

Every Github codespace environment will have **its own database**, so if you're working with more people eveyone will have a different database and different records inside it. This data **will be lost**, so don't spend too much time manually creating records for testing, instead, you can automate adding records to your database by editing ```commands.py``` file inside ```/src/api``` folder. Edit line 32 function ```insert_test_data``` to insert the data according to your model (use the function ```insert_test_users``` above as an example). Then, all you need to do is run ```pipenv run insert-test-data```.

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% read to deploy with Render.com and Heroku in a matter of minutes. Please read the [official documentation about it](https://start.4geeksacademy.com/deploy).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).




