let doctores = [
  {
    nombre: "Dra Rosa Quispe",
    DNI: "73685241",
    especialidad: "Cardiologia",
  },
  {
    nombre: "Dr. Josue Urquizo",
    DNI: "19472063",
    especialidad: "Medicina Interna",
  },
  {
    nombre: "Dra. Emily Lopez",
    DNI: "85930167",
    especialidad: "Pediatria",
  },
  {
    nombre: "Dr. Michael Ramos",
    DNI: "42618905",
    especialidad: "Oncologia",
  },
  {
    nombre: "Dra. Susan Perez",
    DNI: "94725183",
    especialidad: "Oftalmologia",
  },
  {
    nombre: "Dr. Peter Gonzales",
    DNI: "60374829",
    especialidad: "Psiquiatria",
  },
];

const medicinas = [
  {
    nombre: "Ibuprofeno",
    descripcion: "Antiinflamatorio no esteroideo para dolor y fiebre",
    precio: 12.99,
    precioPromocional: 10.5,
    contenidoNeto: "30 tabletas de 400mg",
    linkImagen: "https://ejemplo.com/imagenes/ibuprofeno.jpg",
  },
  {
    nombre: "Omeprazol",
    descripcion: "Inhibidor de la bomba de protones para acidez estomacal",
    precio: 15.5,
    precioPromocional: 13.75,
    contenidoNeto: "14 cápsulas de 20mg",
    linkImagen: "https://ejemplo.com/imagenes/omeprazol.jpg",
  },
  {
    nombre: "Paracetamol",
    descripcion: "Analgésico y antipirético para dolor leve y fiebre",
    precio: 8.75,
    precioPromocional: 7.5,
    contenidoNeto: "20 tabletas de 500mg",
    linkImagen: "https://ejemplo.com/imagenes/paracetamol.jpg",
  },
  {
    nombre: "Amoxicilina",
    descripcion: "Antibiótico de amplio espectro",
    precio: 22.0,
    precioPromocional: 19.99,
    contenidoNeto: "21 cápsulas de 500mg",
    linkImagen: "https://ejemplo.com/imagenes/amoxicilina.jpg",
  },
  {
    nombre: "Loratadina",
    descripcion: "Antihistamínico para alergias",
    precio: 11.25,
    precioPromocional: 9.99,
    contenidoNeto: "10 tabletas de 10mg",
    linkImagen: "https://ejemplo.com/imagenes/loratadina.jpg",
  },
  {
    nombre: "Metformina",
    descripcion: "Medicamento oral para la diabetes tipo 2",
    precio: 18.5,
    precioPromocional: 16.75,
    contenidoNeto: "60 tabletas de 850mg",
    linkImagen: "https://ejemplo.com/imagenes/metformina.jpg",
  },
];

export function loadPacientes() {
  let pacientes = [];

  if (localStorage.getItem("pacientes")) {
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
  }
  return pacientes;
}

export function mostrarPacientes() {
  const pacientes = loadPacientes();
  const container = document.querySelector(
    ".d-flex.flex-wrap.gap-5.justify-content-center"
  );

  container.innerHTML = "";

  pacientes.forEach((paciente) => {
    const pacienteHTML = `
      <div class="shadow-lg border-custom p-3 general-container">
        <div class="d-grid justify-content-center align-items-center mb-3">
          <img src="./assets/paciente-inter.png" alt="imagen de medico" />
        </div>
        <div>
          <p>
            <span class="text-custom-main fw-medium">Nombre:</span> ${paciente.nombre}
          </p>
          <p><span class="text-custom-main fw-medium">DNI:</span> ${paciente.dni}</p>
          <p>
            <span class="text-custom-main fw-medium">SINTOMAS:</span>
            ${paciente.sintomas}
          </p>
          <p>
            <span class="text-custom-main fw-medium">DIAGNOSTICO:</span> ${paciente.diagnostico}
          </p>
          <p>
            <span class="text-custom-main fw-medium">DOCTOR A CARGO:</span>
            ${paciente.doctor}
          </p>
        </div>
      </div>
    `;

    container.innerHTML += pacienteHTML;
  });
}

export function traerDoctor() {
  let doctor;
  if (localStorage.getItem("datosFormulario")) {
    doctor = JSON.parse(localStorage.getItem("datosFormulario"));
  }
  return doctor;
}

export function mostrarDoctores() {
  const container = document.getElementById("doctoresContainer");

  container.innerHTML = "";

  doctores.forEach((doctor) => {
    const doctorHTML = `
        <div class="shadow-lg border-custom p-3 general-container">
          <div class="d-grid justify-content-center align-items-center mb-3">
            <img src="./assets/doctor-blue.png" alt="imagen de medico" />
          </div>
          <div>
            <p>
              <span class="text-custom-main fw-medium">Nombre:</span> ${doctor.nombre}
            </p>
            <p><span class="text-custom-main fw-medium">DNI:</span> ${doctor.DNI}</p>
            <p>
              <span class="text-custom-main fw-medium">ESPECIALIDAD:</span>
              ${doctor.especialidad}
            </p>
            <p>
              <span class="text-custom-main fw-medium">UNIVERSIDAD:</span>
              Sideral Carrion
            </p>
          </div>
        </div>
    `;

    container.innerHTML += doctorHTML;
  });
}

export function mostrarMedicina() {
  const container = document.getElementById("doctoresContainer");

  container.innerHTML = "";

  doctores.forEach((doctor) => {
    const doctorHTML = `
        <div class="shadow-lg border-custom p-3 general-container">
          <div class="d-grid justify-content-center align-items-center mb-3">
            <img src="./assets/doctor-blue.png" alt="imagen de medico" />
          </div>
          <div>
            <p>
              <span class="text-custom-main fw-medium">Nombre:</span> ${doctor.nombre}
            </p>
            <p><span class="text-custom-main fw-medium">DNI:</span> ${doctor.DNI}</p>
            <p>
              <span class="text-custom-main fw-medium">ESPECIALIDAD:</span>
              ${doctor.especialidad}
            </p>
            <p>
              <span class="text-custom-main fw-medium">UNIVERSIDAD:</span>
              Sideral Carrion
            </p>
          </div>
        </div>
    `;

    container.innerHTML += doctorHTML;
  });
}
