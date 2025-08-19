const log = (msg) => {
  console.log(msg);
  const out = document.getElementById("output");
  const line = document.createElement("div");
  line.textContent = msg;
  out.appendChild(line);
  out.scrollTop = out.scrollHeight;
};

function ordenandoBebida(bebida) {
  return new Promise((resolve, reject) => {
  log(`Ordenando: ${bebida}`);
    setTimeout(() => {
      if (bebida === "Coca-cola") {
        resolve("Ordenaste una bebida");
      } else {
        reject("No tenemos esa bebida");
      }
    }, 1000);
  });
}

function ordenandoComida(comida) {
  return new Promise((resolve, reject) => {
  log(`Ordenando: ${comida}`);
    setTimeout(() => {
      if (comida === "Pizza") {
        resolve("Ordenaste una Pizza");
      } else {
        reject("No tenemos esa comida");
      }
    }, 2500);
  });
}

function ordenandoPostre(postre) {
  return new Promise((resolve, reject) => {
  log(`Ordenando: ${postre}`);
    setTimeout(() => {
      if (postre === "Helado") {
        resolve("Ordenaste un postre");
      } else {
        reject("No tenemos ese postre");
      }
    }, 4000);
  });
}

async function ordenarTodo() {
  try {
    const bebida = await ordenandoBebida("Coca-cola");
    log(bebida);
    log("🥤 Bebida entregada.");
    const comida = await ordenandoComida("Pizza");
    log(comida);
    log("🍕 Pizza entregada.");
    const postre = await ordenandoPostre("Helado");
    log(postre);
    log("🍨 Postre entregado.");
    log("¡Todo ha sido ordenado!");
    log("✅ El platillo ha sido creado exitosamente.");
  } catch (error) {
    log(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
//   ordenarTodo();
document.getElementById("start").addEventListener("click", ordenarTodo);
});
