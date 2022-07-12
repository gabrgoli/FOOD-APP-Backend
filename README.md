# FOOD-APP-Backend
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
Bajar las 2 carpetas, del Front y del Back.
En la del front, en el archivo actions hay que vamciar la variable api por 'http://localhost:3001', para que
tome como backend al servidor local que se levanta desde el archivo del backend.

Para levantar el servidor desde el archivo del Backend, desde la carpeta src o principal, se coloca el comando npm start.
Para levantar el Frontend, desde la carpeta client, se coloca el comando npm start.

Para Guardar los datos de la api en la BDD, hay que configurar la variable let guardarApiEnBDD=false; que estan en routes/index.js y colocarla en true guardarApiEnBDD=true;

Hay que elegir en que base de datos se guardan o se usan los datos una vez guardados.
Para ello hay que modificar el archvio db.js


Si se usa la base de datos local, no la que esta en heroku, entonces hay que medificar en el archivo db.js, boorrar lo siguiente:
dialectOptions:{
      ssl:{
        require:true,
        rejectUnauthorized:false
      }
    }
