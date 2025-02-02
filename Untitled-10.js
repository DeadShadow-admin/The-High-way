document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value;
    if (query) {
        alert("Buscando: " + query);
        // Aquí podrías implementar la lógica para filtrar productos
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
});
