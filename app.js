// Base de datos completa con TODAS las recetas y especificaciones del recetario
const recipes = [
    {
        name: "Aderezo de Pepinillos / Relish",
        category: "Aderezos y Bases",
        prepTime: "5 minutos",
        yield: "Porción estándar",
        ingredients: [
            "Mayonesa (Base)",
            "Pepinillos picados finamente",
            "Lemon Pepper (según especificación)"
        ],
        steps: [
            "Mezclar rigurosamente la mayonesa con los pepinillos picados.",
            "Incorporar el toque de lemon pepper para estandarizar el sabor del relish de la casa."
        ]
    },
    {
        name: "Aderezo de Jalapeño",
        category: "Aderezos y Bases",
        prepTime: "8 minutos",
        yield: "Porción estándar",
        ingredients: [
            "Chiles jalapeños",
            "Cebolla y ajo",
            "Leche o base láctea para emulsión"
        ],
        steps: [
            "Freír los chiles jalapeños, cebolla y ajo en la freidora durante al menos 5 minutos.",
            "Licuar junto con la base láctea hasta lograr una consistencia cremosa y homogénea."
        ]
    },
    {
        name: "Mermelada de fresa y tocino",
        category: "Aderezos y Bases",
        prepTime: "5 minutos",
        yield: "650 gr",
        ingredients: [
            "1 pz Cebolla blanca mediana (en julianas)",
            "180 gr Mantequilla y 50 ml Aceite vegetal",
            "300 gr Mermelada de fresa",
            "100 ml Chipotle molido",
            "3 Rebanadas de tocino (medio frito y en cubitos)",
            "45 ml Coca-Cola"
        ],
        steps: [
            "Calentar el sartén con aceite y derretir la mantequilla.",
            "Freír la cebolla en julianas; al estar sofrita, agregar la Coca-Cola y dejar reducir.",
            "Incorporar el tocino picado previamente medio frito y añadir la mermelada de fresa.",
            "Mezclar hasta que se haga líquido e incorporar el chipotle molido.",
            "Reducir hasta obtener una consistencia semiespesa, retirar y reservar."
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
            "Freír los tenders y montar con 120g de papas en la canastilla con papel encerado.",
            "Mandar aderezo de pepinillos en un ramiki de 2 oz de cortesía."
        ]
    },
    {
        name: "Tenders de 4 pz",
        category: "Tenders",
        prepTime: "8 minutos",
        yield: "1 porción",
        ingredients: [
            "4 pz Tenders de pollo",
            "120 gr Papas a la francesa",
            "45 ml (1 ramiki de 2 oz) Aderezo de pepinillos"
        ],
        steps: [
            "Freír los tenders y montar con 120g de papas en la canastilla con papel encerado.",
            "Mandar aderezo de pepinillos en un ramiki de 2 oz de cortesía."
        ]
    },
    {
        name: "Tenders de 5 pz",
        category: "Tenders",
        prepTime: "8 minutos",
        yield: "1 porción",
        ingredients: [
            "5 pz Tenders de pollo",
            "120 gr Papas a la francesa",
            "45 ml (1 ramiki de 2 oz) Aderezo de pepinillos"
        ],
        steps: [
            "Freír los tenders y montar con 120g de papas en la canastilla con papel encerado.",
            "Mandar aderezo de pepinillos en un ramiki de 2 oz de cortesía."
        ]
    },
    {
        name: "Tenders de 10 pz (Familiar)",
        category: "Tenders",
        prepTime: "8 minutos",
        yield: "1 orden familiar",
        ingredients: [
            "10 pz Tenders de pollo",
            "300 gr Papas a la francesa",
            "90 ml (2 ramikis de 2 oz) Aderezo de pepinillos"
        ],
        steps: [
            "Freír los tenders y montar con 300g de papas en plato negro con papel encerado.",
            "Mandar 2 aderezos de pepinillos en ramikis de 2 oz."
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
            "Freír tenders y calentar el pan en la plancha.",
            "Untar mayonesa en ambas tapas.",
            "Armar: un tender, rebanadas de queso manchego, el segundo tender, salsa BBQ Jack, y ensalada de repollo antes de tapar."
        ]
    },
    {
        name: "Classic Sandwich",
        category: "Burgers",
        prepTime: "10 minutos",
        yield: "1 porción",
        ingredients: [
            "1 pz Pan brioche",
            "2 pz Tenders de pollo",
            "20 gr Aderezo de pepinillos",
            "25 gr Ensalada de repollo",
            "2 pz Rodajas de tomate"
        ],
        steps: [
            "Freír los tenders y calentar el pan en la plancha.",
            "Untar aderezo de pepinillos en ambas tapas.",
            "Colocar los tenders, la ensalada de repollo y las rodajas de tomate."
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
            "Asar los 2 discos de carne de 110g; al voltear, cubrir cada uno con la mezcla de quesos (25g mozzarella / rebanada de amarillo) hasta gratinar.",
            "Untar aderezo blue cheese en ambas tapas del pan.",
            "Montar la primera carne con queso, la segunda carne con queso, y coronar con la mermelada de fresa y tocino.",
            "Servir acompañado de 120g de papas fritas."
        ]
    },
    {
        name: "Hot Dog and Fries (Clásico)",
        category: "Hot Dogs",
        prepTime: "7 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan de hot dog",
            "1 pz Salchicha jumbo",
            "5 gr Catsup y 5 gr Mostaza",
            "5 ml Mayonesa",
            "20 gr Jitomate picado",
            "120 gr Papa francesa"
        ],
        steps: [
            "Hacer una incisión no muy profunda a lo largo de la salchicha (sin envoltura).",
            "Freír a 180°C durante aproximadamente 3 minutos.",
            "Montar en el pan, decorar con el jitomate y las salsas, y acompañar con papas."
        ]
    },
    {
        name: "Boneless Dog",
        category: "Hot Dogs",
        prepTime: "7 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan para hot-dog y 1 pz Salchicha jumbo",
            "15 gr Mayonesa",
            "5 ml Salsa McCarthy's Original y 5 ml Blue cheese",
            "3 pz Boneless red hot",
            "20 gr Pepinillos picados",
            "120 gr Papa francesa y 2 gr Perejil picado"
        ],
        steps: [
            "Freír la salchicha y los boneless precocidos por 4 minutos, escurrir aceite.",
            "Calentar pan en plancha, agregar mayonesa dentro y los pepinillos picados, colocando la salchicha encima.",
            "Partir boneless a la mitad en un bowl, bañar con la salsa y acomodar sobre el hot dog.",
            "Decorar con zigzag de blue cheese y espolvorear perejil picado."
        ]
    },
    {
        name: "Mexican Dog",
        category: "Hot Dogs",
        prepTime: "8 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan para hot-dog y 1 pz Salchicha jumbo",
            "40 gr Tocino y 40 gr Guacamole",
            "30 gr Quesillo",
            "15 gr Aderezo de jalapeño",
            "20 gr Cebolla picante de hamburguesa",
            "20 gr Tortilla en juliana",
            "120 gr Papa francesa"
        ],
        steps: [
            "Freír la salchicha en freidora por 3 minutos y escurrir.",
            "Calentar el pan, poner aderezo de jalapeño y montar la salchicha (retirando palillos).",
            "Gratinar el quesillo, montar en el hot dog junto con la cebolla picante y finalizar con el guacamole y papas."
        ]
    },
    {
        name: "Hawaiian Dog",
        category: "Hot Dogs",
        prepTime: "8 minutos",
        yield: "1 pieza",
        ingredients: [
            "1 pz Pan para hot-dog y 1 pz Salchicha jumbo",
            "40 gr Jamón y 40 gr Piña en almíbar (en cubos)",
            "30 gr Quesillo",
            "15 gr Mayonesa",
            "5 ml Salsa BBQ Original",
            "120 gr Papa francesa"
        ],
        steps: [
            "Freír la salchicha 3 minutos y escurrir.",
            "Calentar el pan en la plancha; cocinar en cubos el jamón y la piña por 4 minutos junto con el quesillo para gratinar.",
            "Untar mayonesa en la base del pan, colocar la salchicha y añadir la mezcla caliente de jamón, piña y quesillo.",
            "Coronar con salsa BBQ original."
        ]
    }
];

// Renderizar recetas en la interfaz
function displayRecipes(recipesToDisplay) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = '';

    if (recipesToDisplay.length === 0) {
        container.innerHTML = `<p class="text-zinc-500 col-span-2 text-center py-12 text-sm">No se encontraron recetas con ese criterio en el recetario.</p>`;
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.className = "bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition shadow-lg group";
        
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start gap-2 mb-3">
                    <h3 class="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition">${recipe.name}</h3>
                    <span class="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap border border-amber-500/20">${recipe.category}</span>
                </div>
                <div class="text-xs text-zinc-400 flex gap-4 mb-4 font-medium">
                    <span>⏱ ${recipe.prepTime}</span>
                    <span>📊 ${recipe.yield}</span>
                </div>
                
                <h4 class="text-xs font-bold uppercase tracking-wider text-amber-500/90 mb-1">Ingredientes:</h4>
                <ul class="text-xs text-zinc-300 list-disc list-inside space-y-1.5 mb-4 bg-zinc-950/40 p-3 rounded-xl border border-zinc-800/60">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>

                <h4 class="text-xs font-bold uppercase tracking-wider text-amber-500/90 mb-1">Elaboración / Armado:</h4>
                <ol class="text-xs text-zinc-300 list-decimal list-inside space-y-1.5 bg-zinc-950/40 p-3 rounded-xl border border-zinc-800/60">
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtro de categorías por botones
function filterCategory(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-amber-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-zinc-900', 'text-zinc-300', 'border', 'border-zinc-800');
    });
    event.currentTarget.classList.remove('bg-zinc-900', 'text-zinc-300', 'border', 'border-zinc-800');
    event.currentTarget.classList.add('bg-amber-600', 'text-white', 'shadow-md');

    if (category === 'all') {
        displayRecipes(recipes);
    } else {
        const filtered = recipes.filter(r => r.category === category);
        displayRecipes(filtered);
    }
}

// Buscador predictivo en tiempo real
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.category.toLowerCase().includes(term) ||
        r.ingredients.some(ing => ing.toLowerCase().includes(term))
    );
    displayRecipes(filtered);
});

// Inicializar app mostrando todo
displayRecipes(recipes);
