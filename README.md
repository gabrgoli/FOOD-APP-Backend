<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>
video youtube tutorial para empezar el proyecto: <link>https://www.youtube.com/watch?v=S4IgPTwwPBw&t=9s&ab_channel=MonkeyWit</link>
<p align="right">
  <img height="200" src="./cooking.png" />
</p>



# FOOD-APP-Backend

LINK A LA APP: 
https://food-app-frontend-gabrgoli.vercel.app/

Food APP es una aplicación creada con ReactJS para el FRONTEND y NodeJS y Express para el BACKEND.
Se utiliza una base de datos en Postgress Sequelize.
La base de datos se carga utilizando los datos de una API llamada Spoonacular.

La aplicación tiene las siguientes funcionalidades.
* Listado de mas de 200 recetas de comida
* Es responsiva, se puede visualizar por celular o PC.
* Filtrar las recetas por el tipo de receta que el usuario quiera verificar.
* Buscador por nombre de receta
* Ordenar recetas según una calificación saludable.
* Cada Receta presenta su modo de preparación y los ingredientes que se deben utiizar. 
* Icono de compartir receta
* Crear tus propias recetas, agregando una fotografía desde el celular o la PC.
* Paginado del listado de recetas 


# NOTAS

El back y el front estan divididos en 2 archios.
El deploy del back se realizo en Heroku.
El deploy del front se realizó en Versel.
Haciendo un GIT push al main de cada uno, el deploy se actualiza automaticamente.

# COMO UTILIZAR EL PROYTECTO
Bajar las 2 carpetas, del Front y del Back.<br/>
En la carpeta del FRONTEND en src/actions, hay que cambiar la variable api por 'http://localhost:3001', para que
tome como backend al servidor local que se levanta desde el archivo del backend.

Para levantar el servidor desde el archivo del Backend, desde la carpeta src o principal, se coloca el comando npm start.
Para levantar el Frontend, desde la carpeta client, se coloca el comando npm start.
Por defecto va a utilizar la base de datos que esta en la nube en heroku.



# GUARDAR DATOS DE API EN LA BDD DE HEROKU
* Utilizar por las dudas el archivo .env en el repositorio del backend, para que tome el API_KEY de spoonacular.
* Vamos a configurar el Backend, para que tome la BDD quue esta en HEROKU (ya esta configurado asi).
* La variable let guardarApiEnBDD=false; que estan en routes/index.js colocarla en true, guardarApiEnBDD=true.
* Verificar que en actions, en el Frontend, la variable api, apunte a la direccion del Backend que brinda Heroku al deployar.
* En el archivo app.js del Backend, verificar que se direcciona a la web del FRONT que nos brinda Vercel. Verificar la variable de estado CORS_URL
* Se realiza un Push al main del front y del backend.
* En heroku deploy del back
* en Vercel deploy del Front
* Una vez que se realizaron los deploy, entro a la URL que me brindo Vercel para el front y lo coloco en CORS_URL, en las variables de entorno de Heroku, desde settings.
* Al comenzar con la app, se dirige al landing, el cual lleca al home, /home, desde alli se realizara la carga a la base de datos automaticamente y luego el programa se rompe porque no puede leer una propiedad. No importa porque los datos ya estaran cargados en la Base de datos.
* Cambiar la variable guardarApiEnBDD por false y realizar un push al main de nuevo.
* Deploy nuevamente del backend
* Listo, el programa deberia funcionar

este es el error que muestra
react_devtools_backend.js:4026 TypeError: Cannot read properties of undefined (reading '0')
CardRecipeBig.jsx:111 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '0')
    at Array.map (<anonymous>)
    at Y (CardRecipeBig.jsx:110:35)
    at ci (react-dom.production.min.js:157:137)
    
# nota, sobre si se quiere usar la Base de datos POSTRGESS Pg Admin Local
Si se usa la base de datos local, no la que esta en heroku, entonces hay que modificar en el archivo db.js, boorrar lo siguiente:
dialectOptions:{
      ssl:{
        require:true,
        rejectUnauthorized:false
      }
    }

# APIKEYs PARA USAR PARA LA API

c269360a8e794e85a3125e0d75de4535
ee01ef64bf3d42fea8fa3dfb8884fd1b
350fc7eca0294a588952d5f348d16756
c085770cf9ff44dda5ad0d72367fde38
956941a550eb4967afc0fe25a367ad30
1f9f2725f4684247a34fe12384bed91e
6b9d629cb18945f081b2253a297de9ad
4fb39dedc98f47798a6aab0309a5c207
60b861ad9e714f98bd9aa8978de4c0ae
624f6d4ea4ee4e4dac670e886a545507
8b29daf135fb49b4905ef644af3fbcfe
4b94c6a69aba4bf3af643115f93bc49b
1eccc1839f3e4cb39932c2d2757a7fee
534f1669c565476d8284a89d5602de87