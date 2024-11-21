    // Archivo: app.js

    // API URLs
    const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
    const DOG_API_URL = "https://api.thedogapi.com/v1/images/search";

    // Elementos del DOM
    const catImg = document.getElementById("cat-img");
    const dogImg = document.getElementById("dog-img");
    const catVoteBtn = document.getElementById("cat-vote");
    const dogVoteBtn = document.getElementById("dog-vote");
    const resultText = document.getElementById("result");

    // Estado de votación
    let catVotes = 0;
    let dogVotes = 0;

    // Función para obtener imágenes
    async function fetchImage(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data[0].url; // Primera imagen del array
    } catch (error) {
        console.error("Error fetching image:", error);
    }
    }

    // Función para actualizar imágenes
    async function updateImages() {
    catImg.src = await fetchImage(CAT_API_URL);
    dogImg.src = await fetchImage(DOG_API_URL);
    }

    // Manejo de votos
    function handleVote(animal) {
    if (animal === "cat") {
        catVotes++;
    } else if (animal === "dog") {
        dogVotes++;
    }
    resultText.textContent = `Gatos: ${catVotes} | Perros: ${dogVotes}`;
    updateImages(); // Cargar nuevas imágenes tras el voto
    }

    // Inicializar
    updateImages();

    catVoteBtn.addEventListener("click", () => handleVote("cat"));
    dogVoteBtn.addEventListener("click", () => handleVote("dog"));
