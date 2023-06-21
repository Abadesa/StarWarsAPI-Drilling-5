// Obtener referencias a los elementos HTML relevantes
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const resultDiv = document.getElementById('result');

// Ocultar el resultDiv inicialmente
resultDiv.style.display = "none";

// Agregar eventos click a las tarjetas
card1.addEventListener('click', () => {
    fetchAndDisplayCharacters(1, 5);
    resultDiv.style.backgroundColor = "rgb(97, 97, 214)";
    resultDiv.style.display = "block";
});

card2.addEventListener('click', () => {
    fetchAndDisplayCharacters(6, 11);
    resultDiv.style.backgroundColor = "rgb(56, 156, 90)";
    resultDiv.style.display = "block";
});

card3.addEventListener('click', () => {
    fetchAndDisplayCharacters(12, 16);
    resultDiv.style.backgroundColor = "rgb(175, 150, 65)";
    resultDiv.style.display = "block";
});

// Función para obtener y mostrar los datos de los personajes de la API
function fetchAndDisplayCharacters(startId, endId) {
    // Crear un array para almacenar las promesas de las solicitudes fetch
    const characterPromises = [];

    // Realizar las solicitudes fetch para cada personaje en el rango
    for (let i = startId; i <= endId; i++) {
        characterPromises.push(
            fetch(`https://swapi.dev/api/people/${i}/`)
                .then(response => response.json()) // Parsear la respuesta como JSON
        );
    }

    // Esperar a que todas las promesas se resuelvan
    Promise.all(characterPromises)
        .then(characters => {
            // Construir el HTML con los datos de los personajes
            let charactersHTML = '';
            characters.forEach(data => {
                charactersHTML += `
                    <h2>${data.name}</h2>
                    <p class="p-1"><strong>Altura:</strong> ${data.height}</p>
                    <p class="p-1"><strong>Peso:</strong> ${data.mass}</p>
                    <hr>
                `;
            });

            // Mostrar el HTML en el div de resultados
            resultDiv.innerHTML = charactersHTML;
        })
        .catch(error => {
            // Manejar errores en caso de que la solicitud falle
            resultDiv.innerHTML = '<p>Ocurrió un error al obtener los datos de los personajes.</p>';
            console.error(error);
        });
}
