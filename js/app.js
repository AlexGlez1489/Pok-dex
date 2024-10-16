const showPokemonBtn = document.getElementById('showPokemonBtn');
const pokemonContainer = document.querySelector('.pokemon-info');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');

// Función para obtener un Pokémon aleatorio
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1010) + 1; // IDs entre 1 y 1010
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    // Mostrar los datos en la interfaz
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonContainer.style.display = 'block';
}

// Evento para el botón "Mostrar Pokémon"
showPokemonBtn.addEventListener('click', fetchRandomPokemon);

// Consulta automática cada 30 segundos
setInterval(fetchRandomPokemon, 30000);


 // Ocultar el contenedor de carga una vez que la página se ha cargado
 window.onload = function() {
    document.getElementById('loading').style.display = 'none';
};

document.getElementById('showPokemonBtn').addEventListener('click', function() {
    const selectedPokemon = document.getElementById('pokemonSelect').value;
    if (selectedPokemon) {
        document.getElementById('pokemonName').innerText = selectedPokemon.charAt(0).toUpperCase() + selectedPokemon.slice(1);
        document.getElementById('pokemonImage').src = `images/${selectedPokemon}.png`; // Asegúrate de tener imágenes en la carpeta "images"
        
        const pokemonInfo = document.querySelector('.pokemon-info');
        pokemonInfo.classList.add('show');
    } else {
        alert('Por favor, selecciona un Pokémon.');
    }
});
