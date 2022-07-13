<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

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
* Una vez que se realizaron los deploy, entro a la URL que me brindo Vercel y que coloque en CORS_URL
* Al entrar a la seccion /home se realizara la carga a la base de datos y luego el programa se rompe porque no puede leer una propiedad. No importa porque los datos ya estaran cargados en la Base de datos.
* Cambiar la variable guardarApiEnBDD por false y realizar un push al main de nuevo.
* Deploy nuevamente del backend
* Listo, el programa deberia funcionar

# nota, sobre si se quiere usar la Base de datos POSTRGESS Pg Admin Local
Si se usa la base de datos local, no la que esta en heroku, entonces hay que modificar en el archivo db.js, boorrar lo siguiente:
dialectOptions:{
      ssl:{
        require:true,
        rejectUnauthorized:false
      }
    }
