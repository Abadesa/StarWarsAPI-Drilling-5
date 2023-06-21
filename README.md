## README

Este código JavaScript muestra un ejemplo de cómo obtener y mostrar datos de personajes utilizando la API de Star Wars (SWAPI). A continuación, se describen las funciones y eventos principales utilizados en el código:

![Vista Desktop de la página](/assets/img/Muestra.jpg)


1. Obtener referencias a los elementos HTML relevantes:
   - `card1`, `card2`, `card3`: Obtiene las referencias a los elementos de tarjeta con los IDs 'card-1', 'card-2' y 'card-3', respectivamente.
   - `resultDiv`: Obtiene la referencia al elemento de div con el ID 'result'.

2. Ocultar el `resultDiv` inicialmente:
   - Configura el estilo del `resultDiv` para ocultarlo al inicio.

3. Agregar eventos click a las tarjetas:
   - Agrega eventos de click a `card1`, `card2` y `card3`.
   - Cuando se hace clic en una tarjeta, se llamará a la función `fetchAndDisplayCharacters` con los parámetros correspondientes y se realizarán las acciones asociadas.

4. Función `fetchAndDisplayCharacters(startId, endId)`:
   - Esta función realiza solicitudes fetch a la API de SWAPI para obtener los datos de los personajes en un rango específico.
   - Crea un array llamado `characterPromises` para almacenar las promesas de las solicitudes fetch.
   - Realiza las solicitudes fetch para cada personaje en el rango especificado, agregando las promesas al array `characterPromises`.
   - Espera a que todas las promesas se resuelvan utilizando `Promise.all`.
   - Una vez que todas las promesas se resuelven, se construye el HTML con los datos de los personajes obtenidos.
   - El HTML generado se inserta en el `resultDiv`.

El código utiliza la API de SWAPI para obtener información sobre personajes de Star Wars y mostrarla en el navegador. Al hacer clic en una de las tarjetas, se realizará una solicitud a la API para obtener los datos de los personajes en el rango especificado y se mostrarán en el `resultDiv`. Si ocurre algún error durante las solicitudes o el procesamiento de los datos, se mostrará un mensaje de error en el `resultDiv` y se imprimirá información adicional en la consola.