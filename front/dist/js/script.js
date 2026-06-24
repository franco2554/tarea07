// ===================================================
// Ejercicio 1: El Rastro del Código
// ===================================================
console.log("----- Ejercicio 1 -----");

const multiplicador = 2;
let result = 10;

const procesar = (valor) => {
    let bono = 5;
    if (valor > 15) {
        return (valor * multiplicador) + bono;
    } else {
        return valor + bono;
    }
}

// Elijo un valor menor a 15 y otro mayor a 30
const numeros = [12, 35];

numeros.forEach(num => {
    let temporal = procesar(num);
    if (temporal > 30) {
        result += temporal;
    } else {
        result -= temporal;
    }
});

console.log("El resultado final es:", result);


// ===================================================
// Ejercicio 2: El Repasador de Precios
// ===================================================
console.log("----- Ejercicio 2 -----");

const bibliotecaSteam = [
    { nombre: "The Witcher 3", precio: 450 },
    { nombre: "Cyberpunk 2077", precio: 600 },
    { nombre: "Stardew Valley", precio: 250 }
];

const mostrarJuego = (juego) => {
    console.log("El juego " + juego.nombre + " cuesta $" + juego.precio);
    if (juego.precio < 500) {
        console.log("Oferta!");
    }
}

bibliotecaSteam.forEach(juego => {
    mostrarJuego(juego);
});


// ===================================================
// Ejercicio 3: El Gestor de Servidores
// ===================================================
console.log("----- Ejercicio 3 -----");

const servidores = [
    { nombre: "Minecraft", usuarios: 45, online: true },
    { nombre: "Csgo", usuarios: 0, online: false },
    { nombre: "Terraria", usuarios: 12, online: true }
];

const verificarEstado = (servidor) => {
    switch (true) {
        case (servidor.usuarios === 0):
            console.log(servidor.nombre + ": Servidor vacío");
            break;
        case (servidor.usuarios >= 1 && servidor.usuarios <= 20):
            console.log(servidor.nombre + ": Carga moderada");
            break;
        default:
            console.log(servidor.nombre + ": Servidor lleno");
    }
}

let contador = 1;
while (contador <= 3) {
    console.log("Escaneando servidor " + contador);
    contador++;
}

servidores.forEach(servidor => {
    if (servidor.online === true) {
        verificarEstado(servidor);
    }
});


// ===================================================
// Ejercicio 4: El Contador de Daño
// ===================================================
let hp = 1000;
const vidaJefe = document.getElementById("vidaJefe");
const btnAtacar = document.getElementById("btnAtacar");

btnAtacar.addEventListener("click", () => {
    if (hp > 0) {
        hp -= 50;
        vidaJefe.innerText = "Vida del Jefe: " + hp + " HP";
        if (hp <= 0) {
            vidaJefe.innerText = "Jefe Derrotado!";
        }
    }
});
