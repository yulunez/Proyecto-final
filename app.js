const recetas = [
    {
      nombre: "Pasta Alfredo",
      categoria: "Italiana",
      ingredientes: ["Pasta", "Crema", "Queso", "Ajo"],
      tiempo: 30 // en minutos
    },
    {
      nombre: "Tacos al Pastor",
      categoria: "Mexicana",
      ingredientes: ["Tortilla", "Carne de cerdo", "Piña", "Cilantro"],
      tiempo: 25
    },
    {
      nombre: "Sushi",
      categoria: "Japonesa",
      ingredientes: ["Arroz", "Alga", "Pescado"],
      tiempo: 40
    }
  ];
  document.getElementById("filtrar").addEventListener("click", () => {
    const categoria = document.getElementById("categoria").value;
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const ingrediente = document.getElementById("ingrediente").value.toLowerCase();

    document.getElementById("reiniciar").addEventListener("click", () => {
        // Limpiar los valores de los filtros
        document.getElementById("categoria").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("ingrediente").value = "";
      
        // Mostrar todas las recetas
        mostrarResultados(recetas);
      });
      
      // Mostrar todas las recetas al cargar la página por primera vez
      mostrarResultados(recetas);
      
  
    // Filtrar las recetas
    const recetasFiltradas = recetas.filter((receta) => {
      const cumpleCategoria = categoria ? receta.categoria === categoria : true;
      const cumpleTiempo = tiempo ? receta.tiempo <= tiempo : true;
      const cumpleIngrediente = ingrediente
        ? receta.ingredientes.some((ing) =>
            ing.toLowerCase().includes(ingrediente)
          )
        : true;
  
      return cumpleCategoria && cumpleTiempo && cumpleIngrediente;
    });
  
    // Mostrar los resultados
    mostrarResultados(recetasFiltradas);
  });
  
  function mostrarResultados(recetas) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados previos
  
    if (recetas.length === 0) {
      resultadosDiv.innerHTML = "<p>No se encontraron recetas.</p>";
      return;
    }
  
    recetas.forEach((receta) => {
      const recetaDiv = document.createElement("div");
      recetaDiv.innerHTML = `
        <h3>${receta.nombre}</h3>
        <p>Categoría: ${receta.categoria}</p>
        <p>Tiempo: ${receta.tiempo} minutos</p>
        <p>Ingredientes: ${receta.ingredientes.join(", ")}</p>
      `;
      resultadosDiv.appendChild(recetaDiv);
    });
  }
    