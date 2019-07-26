![](https://getonbrd-prod.s3.amazonaws.com/uploads/users/logo/7539/56196685_373144870201326_4054998148798480384_n__3___1_.png)
# Rokketlabs development test

##### A continuación se explican los pasos a seguir para desplegar la api y la aplicacion del frontend.

##### Lo primero es tener instalado en tu pc lo siguiente


### Pre-requisitos
- Nodejs version 8
- yarn

<br>

------------
##### Primer deberas clonar este repositorio y entrar en el, encontraras dos directorios  ___Backend___ y ___Frontend___. Ingresaremos primero en el directorio del ___Backend___.

### Backend - Api RESTful
<br>

##### Ingresamos al directorio desde una terminal, e instalamos las dependencias del proyecto, para ello ejecutamos el siguiente comando :
```bash
yarn install
```
##### Una vez instaladas las dependencias, levantamos la aplicacion con el siguiente comando :
```bash
node server.js
```
##### La misma se ejecutara en el puerto 5000, podemos acceder a ella con la direccion 
[http://localhost:5000](http://localhost:5000)

######La api cuenta con dos endpoints, GET y POST respectivamente
###### Para obtener todos los registros con el metodo GET basta con acceder desde cualquier cliente a al url 
[http://localhost:5000/pets](http://localhost:5000/pets)
<br>
###### Para crear un registros usando el metodo POST se debe pasar en el body un json como se muestra a continuacion y usando la url siguiente
[http://localhost:5000/pets](http://localhost:5000/pets)
```javascript
{
	"nombre": "Firulais",
	"tipo": "Perro",
	"description": "Tiene muchas pulgas"
}
```
###### Ademas en el header se debe indicar que el Content-Type debe ser de tipo application/json
<br><br>