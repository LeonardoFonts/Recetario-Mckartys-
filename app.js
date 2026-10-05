// Base de datos integrada con la información extraída de las fichas técnicas
const recipes = [
    {
        name: "Mermelada de fresa y tocino",
        category: "Aderezos",
        prepTime: "5 minutos",
        yield: "650 gr",
        ingredients: [
            "1 pz Cebolla blanca mediana (en julianas)",
            "180 gr Mantequilla y 50 ml Aceite vegetal",
            "300 gr Mermelada de fresa",
            "100 ml Chipotle molido",
            "3 Rebanadas de tocino (medio frito y en cubitos)",
            "45 ml Coca-cola"
        ],
        steps: [
            "Calentar sartén con aceite y derretir la mantequilla.",
            "Freír la cebolla en julianas y, al estar sofrita, agregar la Coca-Cola para dejar reducir.",
            "Incorporar el tocino picado y la mermelada de fresa hasta hacer líquido.",
            "Agregar el chipotle molido, mezclar y reducir hasta consistencia semiespesa."
        ]
    },
    {
        name: "Tenders de 3 pz",
        category: "Tenders",
        prepTime: "8 minutos",
        yield: "1 porción",
        ingredients: [
            "3 pz Tenders de pollo",
            "120 gr Papas a la francesa",
            "45 ml (1 ramiki de 2 oz) Aderezo de pepinillos"
        ],
        steps: [
            "Freír los tenders y montar con 120g de papas en canastilla con papel encerado.",
            "Mandar aderezo de pepinillos en ramiki de 2 oz (cortesía)."
        ]
    },
    {
        name: "Chicken Bourbon",
        category: "Burgers",
        prepTime: "10 minutos",
        yield: "1 porción",
        ingredients: [
            "1 pz Pan brioche",
            "2 pz Tenders de pollo fritos",
            "20 gr Mayonesa (en ambas tapas)",
            "25 gr Ensalada de repollo",
            "2 pz Queso manchego en rebanadas",
            "45 ml Salsa BBQ Jack",
            "120 gr Papas fritas"
        ],
        steps: [
            "Calentar pan en plancha y freír tenders.",
            "Untar mayonesa, colocar un tender, el queso manchego, el segundo tender, salsa BBQ Jack y ensalada de repollo. Tapar."
        ]
    },
    {
        name: "Hamburguesa MC Aniversario",
        category: "Burgers",
        prepTime: "10 minutos",
        yield: "1 hamburguesa",
        ingredients: [
            "1 pz Pan de hamburguesa",
            "2 discos de carne de 110 gr c/u",
            "45 gr Aderezo blue cheese",
            "60 gr Queso mix rallado (mozzarella y amarillo)",
            "45 gr Mermelada de fresa y tocino",
            "120 gr Papas fritas"
        ],
        steps: [
            "Poner a asar los 2 discos de carne; al voltear, cubrir cada uno con la mezcla de queso para gratinar.",
            "Untar aderezo blue cheese en ambas tapas del pan.",
            "Montar la primera carne con queso, la segunda carne con queso, y coronar con la mermelada de fresa y tocino. Servir con papas."
        ]
    },
    {
        name: "Boneless Dog",
        category: "Hot Dogs",
        prepTime: "7 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan para hot-dog",
            "1 pz Salchicha jumbo",
            "15 gr Mayonesa y 20 gr Pepinillos picados",
            "5 ml Salsa McCarthy's Original",
            "5 ml Aderezo Blue Cheese",
            "3 pz Boneless red hot",
            "120 gr Papa francesa",
            "2 gr Perejil picado"
        ],
        steps: [
            "Freír salchicha y boneless precocidos durante 4 minutos. Escurrir aceite.",
            "Calentar pan, untar mayonesa, poner pepinillos y colocar la salchicha encima.",
            "Partir boneless a la mitad, bañar en salsa McCarthy's y acomodar sobre el hot dog.",
            "Decorar con zigzag de blue cheese y espolvorear perejil picado."
        ]
    },
    {
        name: "Mexican Dog",
        category: "Hot Dogs",
        prepTime: "8 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan y 1 pz Salchicha jumbo",
            "40 gr Tocino y 40 gr Guacamole",
            "30 gr Quesillo",
            "15 gr Aderezo de jalapeño",
            "20 gr Cebolla picante de hamburguesa",
            "20 gr Tortilla en juliana",
            "120 gr Papa francesa"
        ],
        steps: [
            "Freír salchicha 3 minutos y escurrir.",
            "Calentar pan, untar aderezo de jalapeño y montar la salchicha.",
            "Gratinar el quesillo y agregarlo al hot dog junto con la cebolla picante y el guacamole. Acompañar con papas."
        ]
    },
    {
        name: "Hawaiian Dog",
        category: "Hot Dogs",
        prepTime: "8 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan y 1 pz Salchicha jumbo",
            "40 gr Jamón en cubos",
            "40 gr Piña en almíbar en cubos",
            "30 gr Quesillo",
            "15 gr Mayonesa",
            "5 ml Salsa BBQ Original",
            "120 gr Papa francesa"
        ],
        steps: [
            "Freír salchicha 3 minutos. Calentar pan y untar mayonesa en la base.",
            "En la plancha, cocinar por 4 minutos el jamón, la piña y el quesillo hasta gratinar.",
            "Colocar la mezcla sobre la salchicha dentro del pan y bañar al final con salsa BBQ original."
        ]
    }
];

// Función para renderizar las recetas en la interfaz
function displayRecipes(recipesToDisplay) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = '';

    if (recipesToDisplay.length === 0) {
        container.innerHTML = `<p class="text-zinc-500 col-span-2 text-center py-8">No se encontraron recetas con ese criterio.</p>`;
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.className = "bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-zinc-700 transition shadow-sm";
        
        // Armar HTML interno de cada tarjeta
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start gap-2 mb-2">
                    <h3 class="text-lg font-bold text-zinc-100">${recipe.name}</h3>
                    <span class="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap border border-amber-500/20">${recipe.category}</span>
                </div>
                <div class="text-xs text-zinc-400 flex gap-4 mb-4">
                    <span>⏱️️ Prep: ${recipe.prepTime}</span>
                    <span>📊 Rendimiento: ${recipe.yield}</span>
                </div>
                
                <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Ingredientes:</h4>
                <ul class="text-xs text-zinc-300 list-disc list-inside space-y-1 mb-4">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>

                <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Elaboración:</h4>
                <ol class="text-xs text-zinc-300 list-decimal list-inside space-y-1">
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtrar por categoría
function filterCategory(category) {
    // Actualizar estilos visuales de botones
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-amber-600', 'text-white');
        btn.classList.add('bg-zinc-800', 'text-zinc-300');
    });
    event.target.classList.remove('bg-zinc-800', 'text-zinc-300');
    event.target.classList.add('bg-amber-600', 'text-white');

    if (category === 'all') {
        displayRecipes(recipes);
    } else {
        const filtered = recipes.filter(r => r.category === category);
        displayRecipes(filtered);
    }
}

// Búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.ingredients.some(ing => ing.toLowerCase().includes(term))
    );
    displayRecipes(filtered);
});

// Inicializar cargando todas las recetas al abrir la app
displayRecipes(recipes);
