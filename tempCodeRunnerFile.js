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