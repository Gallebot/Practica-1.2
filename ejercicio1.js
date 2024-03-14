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