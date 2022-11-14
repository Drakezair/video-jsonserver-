# Crea tu UI antes que el backend con JSON server

Una tarea común para los desarrolladores front-end es simular un servicio REST de back-end para entregar algunos datos en formato JSON a la aplicación front-end y asegurarse de que todo funcione como se espera.

Por supuesto, puede configurar un servidor backend completo, p. usando Node.js, Express y MongoDB. Sin embargo, esto lleva algo de tiempo y un enfoque mucho más simple puede ayudar a acelerar el tiempo de desarrollo de front-end.

JSON Server es un proyecto simple que lo ayuda a configurar una API REST con operaciones CRUD muy rápido. El sitio web del proyecto se puede encontrar en [https://github.com/typicode/json-server](https://github.com/typicode/json-server).

A continuación, aprenderá cómo configurar el servidor JSON y publicar una API REST de muestra. Además, verá cómo usar otra biblioteca, Faker.js, para generar datos falsos para la API REST que se expone al usar el servidor JSON.

## Instalación JSON server

JSON Server está disponible como paquete NPM. La instalación se puede realizar utilizando el administrador de paquetes Node.js:

`$ npm install -g json-server`

Al agregar la opción -g, nos aseguramos de que el paquete se instale globalmente en su sistema.

## Archivo **JSON**

Ahora vamos a crear un nuevo archivo JSON con el nombre db.json. Este archivo contiene los datos que debe exponer la API REST. Para los objetos contenidos en la estructura JSON, los puntos CRUD se crean automáticamente. Eche un vistazo al siguiente archivo db.json de ejemplo:

```json
{
	"posts":[
		{
			"id": 1,
			"title": "title one",
			"content": "content one"
		},
		{
			"id": 2,
			"title": "title two",
			"content": "content two"
		}
	]
}
```

La estructura JSON consta de un objeto post que tiene asignados tres conjuntos de datos. Cada objeto de post consta de tres propiedades: id, title, y content,

## Ejecutando el servidor

Iniciemos el servidor JSON ejecutando el siguiente comando:

`$ json-server --watch db.json`

Como parámetro, debemos pasar el archivo que contiene nuestra estructura JSON (db.json). Además, estamos usando el parámetro de watch. Al usar este parámetro, nos aseguramos de que el servidor se inicie en modo de observación, lo que significa que observa los cambios en los archivos y actualiza la API expuesta en consecuencia.

![Screen Shot 2022-11-14 at 12.38.20 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.38.20_AM.png)

Ahora podemos abrir la URL http://localhost:3000/posts en el navegador y obtendremos el siguiente resultado:

![Screen Shot 2022-11-14 at 12.42.04 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.42.04_AM.png)

A partir de la salida, puede ver que el recurso de los empleados se ha reconocido correctamente. Ahora puede hacer clic en el enlace de los empleados y una solicitud HTTP GET a http://localhost:3000/posts muestra el siguiente resultado:

![Screen Shot 2022-11-14 at 12.42.46 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.42.46_AM.png)

Los siguientes puntos finales HTTP son creados automáticamente por el servidor JSON:

```json
GET    /posts
GET    /posts/{id}
POST   /posts
PUT    /posts/{id}
PATCH  /posts/{id}
DELETE /posts/{id}
```

Si realiza solicitudes POST, PUT, PATCH o DELETE, los cambios se guardarán automáticamente en db.json. Una solicitud POST, PUT o PATCH debe incluir un encabezado Content-Type: application/json para usar el JSON en el cuerpo de la solicitud. De lo contrario, dará como resultado un 200 OK pero sin que se realicen cambios en los datos.

Es posible extender las URL con más parámetros. P.ej. puede aplicar el filtrado usando parámetros de URL como puede ver a continuación:

http://localhost:3000/posts?title=title_one

Esto devuelve solo un objeto de empleado como resultado. O simplemente realice un texto completo sobre todas las propiedades:

http://localhost:3000/posts?q=content

Para obtener una lista completa de los parámetros de URL disponibles, consulte la documentación del servidor JSON: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

## Prueba de puntos finales de API con POSTman

Iniciar una solicitud GET es fácil simplemente usando el navegador. Para iniciar otros tipos de solicitudes HTTP, puede utilizar una herramienta de cliente HTTP como Postman ([https://www.getpostman.com](https://www.getpostman.com/)). Postman está disponible para MacOS, Windows y Linux. Además, Postman está disponible como una aplicación de Chrome.

## **Get Request**

La interfaz de usuario de Postman es fácil de usar. Para iniciar una solicitud GET, complete el formulario como puede ver en la siguiente captura de pantalla. Haz clic en el botón Enviar y recibirás la respuesta en formato JSON:

![Screen Shot 2022-11-14 at 12.39.04 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.39.04_AM.png)

## **Delete Request**

Una solicitud de eliminación correspondiente se puede ver en la siguiente captura de pantalla:

![Screen Shot 2022-11-14 at 12.39.21 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.39.21_AM.png)

## Post Request

Para crear un nuevo empleado, debemos realizar una solicitud de publicación y establecer el tipo de contenido del cuerpo en JSON (aplicación/json). El nuevo objeto de empleado se ingresa en formato JSON en la sección de datos del cuerpo:

![Screen Shot 2022-11-14 at 12.39.18 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.39.18_AM.png)

## Put Request

Si desea actualizar o cambiar un registro de empleado existente, puede utilizar una solicitud HTTP PUT:

![Screen Shot 2022-11-14 at 12.39.13 AM.png](Crea%20tu%20UI%20antes%20que%20el%20backend%20con%20JSON%20server%200fc510024817408fb147b904c18f14ee/Screen_Shot_2022-11-14_at_12.39.13_AM.png)

# Mocking Data con Faker.js:

Hasta ahora, hemos ingresado datos expuestos por la API manualmente en un archivo JSON. Sin embargo, si necesita una mayor cantidad de datos, la forma manual puede ser engorrosa. Una solución fácil a este problema es usar la biblioteca Faker.js ([https://github.com/marak/Faker.js/](https://github.com/marak/Faker.js/)) para generar datos falsos. La integración de Faker.js en el servidor JSON es fácil. Simplemente siga los pasos a continuación:

- Primero, inicialicemos un nuevo proyecto NPM en el repositorio actual:

`$ npm init`

- A continuación, instale Faker.js usando el paquete faker de NPM:

`$ npm i @faker-js/faker --dev`

Faker.js se instala en la carpeta node_modules. Cree otro archivo employee.js e inserte el siguiente código JavaScript:

```json
const { faker } = require("@faker-js/faker");

function generatePost() {
  var posts = [];
  for (let id = 0; id < 50; id++) {
    posts.push({
      id,
      title: faker.lorem.word(),
      content: faker.lorem.paragraph(),
    });
  }
  return { posts };
}

module.exports = generatePost;
```

Estamos implementando la función generateEmployees() para generar un objeto JSON que contiene 50 empleados. Para obtener los datos falsos de nombre, apellido y correo electrónico, utilizamos los siguientes métodos de la biblioteca Faker.js:

- faker.lorem.word()
- faker.lorem.paragraph()

El servidor JSON requiere que finalmente exportemos la función generatePosts() que es responsable de la generación de datos falsos. Esto se hace usando la siguiente línea de código:

`module.exports =` generatePost

Habiendo agregado esa exportación, podemos pasar el archivo posts.js directamente al comando json-server:

`$ json-server posts.js`

Ahora, la API REST expuesta le brinda acceso a los 50 conjuntos de datos de empleados creados con Faker.js.