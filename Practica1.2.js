//Función Infiltración de Annalyn
function accionesDisponibles(perroPresente) {
    const caballero = Math.random() < 0.5 ? 'dormido' : 'despierto'; //Si el resultado de Math.random() es menor que 0.5, la condición se evalúa como verdadera y la variable caballero se establece en dormido; de lo contrario, se establece en despierto
    const arquero = Math.random() < 0.5 ? 'dormido' : 'despierto';
    const prisionero = Math.random() < 0.5 ? 'dormido' : 'despierto';

    console.log(`Contexto de la situación: Caballero: ${caballero} | Arquero: ${arquero} | Prisionero: ${prisionero}`);


    let acciones = []; //Array que contendrá las acciones disponibles

    if (caballero === 'dormido') {
        acciones.push('Ataque rápido');
    } //Si el caballero está dormido, se agrega la acción 'Ataque rápido' al array acciones.

    if (caballero === 'despierto' || arquero === 'despierto') {
        acciones.push('Espía');
    }

    if (prisionero === 'despierto' && arquero === 'dormido') {
        acciones.push('Señalar al prisionero');
    }

    if (prisionero === 'despierto' && arquero === 'dormido' && !perroPresente) {
        acciones.push('Prisionero libre');
    }

    if (prisionero === 'despierto' && arquero === 'dormido' && perroPresente) {
        acciones.push('Prisionero libre');
    }

    return acciones;
}

let acciones = accionesDisponibles(true);
console.log("Entonces")
console.log(acciones); //Muestra el resultado

//Función jugo
function timeToMixJuice(jugo){
    const tiempo = { 
        "Pure Strawberry Joy" : 0.5,
        "Energizer" : 1.5,
        "Green Garden" : 1.5,
        "Tropical Island" : 3,
        "All Or Nothing" : 5,
        "Ofertas" : 2.5, 
    };
    return tiempo[jugo] || 2.5;
}
const jugoPedido = "Energizer";
const tiempoMezcla = timeToMixJuice(jugoPedido);
console.log(`El jugo "${jugoPedido}" tarda ${tiempoMezcla} minutos en mezclarse.`);

//Función Limas

//Funcion de limas por cortar
function limasPorCortar(limasNecesarias, suministroLimas) {
    const tiposGajo = {
        "little": 6,
        "mediana": 8,
        "grande": 10
    };

    let limasCortadas = 0;
    let limasRequqeridas = limasNeed;
    for (const lima of suministroLimas) {
        limasCortadas += tiposGajo[lima];
        if (limasCortadas >= limasNecesarias) {
            break;
        }
    }

// Se calcula cuántas limas completas son necesarias
const limasCompletas = Math.floor(limasNecesarias / 10);

// Se devuelve la cantidad total de limas (completas + las que quedan)
return limasCompletas + Math.ceil((limasNecesarias % 10) / 10);
}


const limasNeed = 150;
const suministroLimas = ["little", "little", "little", "little", "mediana"];
const limasACortar = limasPorCortar(limasNeed, suministroLimas);
console.log(`Li Mei necesita cortar ${limasACortar} limas.`);

//Función pedidos de Li Mei
function pedidosRestantes(minutosRestantes, jugosPorPreparar) {
    // Arreglo para los pedidos restantes
    const pedidosNoPreparados = [];
    
    // tiempo estimado de preparación para cada jugo
    const tiemposDePreparacion = {
        "Pure Strawberry Joy": 0.5,
        "Energizer": 1.5,
        "Green Garden": 1.5,
        "Tropical Island": 3,
        "All or Nothing": 5
    };
    
    // con un ciclo for se recorren los pedidos en el orden en que aparecen
    for (const pedido of jugosPorPreparar) {
        const tiempoPedido = tiemposDePreparacion[pedido] || 2.5; // tiempo predeterminado
        
        // Li Mei no puede empezar a preparar este pedido antes del final de su turno
        if (tiempoPedido > minutosRestantes) {
            pedidosNoPreparados.push(pedido);
        } else {
            // Restamos el tiempo de preparación al tiempo restante
            minutosRestantes -= tiempoPedido;
        }
    }
    
    return pedidosNoPreparados;
}

const minutosRestantes = 1;
const pedidosPendientes = ["Pure Strawberry Joy", "Energizer", "Tropical Island", "All or Nothing"];
const pedidosNoPreparados = pedidosRestantes(minutosRestantes, pedidosPendientes);

console.log("Los pedidos que Li Mei no puede empezar a preparar antes del final de su turno:");
console.log(pedidosNoPreparados);
