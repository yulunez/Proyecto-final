document.addEventListener('DOMContentLoaded', function() {
    const recipes = ['Spaghetti', 'Tacos', 'Ensalada César'];

    function displayRecipes() {
        const recipeList = document.querySelector('.recetas-container ul');
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe;
            recipeList.appendChild(li);
        });
    }

    function addRecipe(recipeName) {
        if (recipeName) {
            recipes.push(recipeName);
            displayRecipes();
        } else {
            alert('Por favor, ingresa un nombre para la receta.');
        }
    }

    // Inicializar la lista de recetas
    displayRecipes();

    // Ejemplo de cómo añadir una receta (puedes cambiarlo según tus necesidades)
    // addRecipe('Nueva Receta');
});