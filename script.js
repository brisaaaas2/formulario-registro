document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (!validarApellido()) return;
  if (!validarNombre()) return;
  if (!validarDNI()) return;
  if (!validarFecha()) return;
  if (!validarEmail()) return;

  alert("Formulario válido. Datos enviados.");
});

function validarApellido() {
  const apellido = document.getElementById("apellido").value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!regex.test(apellido)) {
    alert("El apellido solo debe contener letras.");
    return false;
  }
  return true;
}

function validarNombre() {
  const nombre = document.getElementById("nombre").value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!regex.test(nombre)) {
    alert("El nombre solo debe contener letras.");
    return false;
  }
  return true;
}

function validarDNI() {
  const dni = document.getElementById("dni").value.trim();
  const regex = /^\d{8}$/;
  if (!regex.test(dni)) {
    alert("El DNI debe tener exactamente 8 dígitos numéricos.");
    return false;
  }
  return true;
}

function validarFecha() {
  const fecha = document.getElementById("fecha").value;
  const fechaIngresada = new Date(fecha);
  const fechaMinima = new Date("2006-01-01");
  if (fechaIngresada <= fechaMinima) {
    alert("La fecha debe ser posterior al año 2006.");
    return false;
  }
  return true;
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }
  return true;
}

document.getElementById("preguntasBtn").addEventListener("click", function () {
  const r1 = prompt("¿Cuál es tu nacionalidad?");
  const r2 = prompt("¿Cuál es tu color favorito?");
  const r3 = prompt("¿Cómo se llama tu mascota?");

  const respuestas = `
    <p><strong>Nacionalidad:</strong> ${r1}</p>
    <p><strong>Color favorito:</strong> ${r2}</p>
    <p><strong>Nombre de la mascota:</strong> ${r3}</p>
  `;

  document.getElementById("respuestas").innerHTML = respuestas;
});
