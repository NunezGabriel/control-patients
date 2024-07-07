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
    linkImagen:
      "https://www.lasanteca.com/userfiles/2018/12/IBUPROFENO-800MG-CAJA-POR-50-TABLETAS-CON-BLISTER.jpg",
  },
  {
    nombre: "Omeprazol",
    descripcion: "Inhibidor de la bomba de protones para acidez estomacal",
    precio: 15.5,
    precioPromocional: 13.75,
    contenidoNeto: "14 cápsulas de 20mg",
    linkImagen:
      "https://farmaciauniversal.com/assets/sources/PRODUCTOS/00896a.jpg",
  },
  {
    nombre: "Paracetamol",
    descripcion: "Analgésico y antipirético para dolor leve y fiebre",
    precio: 8.75,
    precioPromocional: 7.5,
    contenidoNeto: "20 tabletas de 500mg",
    linkImagen:
      "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/108010X.jpg",
  },
  {
    nombre: "Amoxicilina",
    descripcion: "Antibiótico de amplio espectro",
    precio: 22.0,
    precioPromocional: 19.99,
    contenidoNeto: "21 cápsulas de 500mg",
    linkImagen:
      "https://farmaciauniversal.com/assets/sources/PRODUCTOS/22598a.jpg",
  },
  {
    nombre: "Loratadina",
    descripcion: "Antihistamínico para alergias",
    precio: 11.25,
    precioPromocional: 9.99,
    contenidoNeto: "10 tabletas de 10mg",
    linkImagen:
      "https://contifarma.pe/wp-content/uploads/2021/09/Loratadina-10-mg.png",
  },
  {
    nombre: "Metformina",
    descripcion: "Medicamento oral para la diabetes tipo 2",
    precio: 18.5,
    precioPromocional: 16.75,
    contenidoNeto: "60 tabletas de 850mg",
    linkImagen:
      "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/427493M.jpg",
  },
];

export function traerPaciente() {
  let pacientes = [];

  if (localStorage.getItem("pacientes")) {
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
  }
  return pacientes;
}

export function mostrarPacientes() {
  const pacientes = traerPaciente();
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
  const container = document.getElementById("medicinaContainer");

  container.innerHTML = "";

  medicinas.forEach((medicina) => {
    const medicinaHTML = `
        <div class="shadow-lg border-custom p-3 general-container">
          <div class="">
            <h1 class="text-center mb-3 text-custom-main">${medicina.nombre}</h1>
          </div>
          <div class="d-grid overflow-hidden mb-4 shadow rounded-3 justify-content-center align-items-center">
            <img src=${medicina.linkImagen} class="imagenCard" alt="Abrilar EA 575" />
          </div>
          <div class="description">
            <h5 class="text-custom-main">Descripcion</h5>
            <p class="text-medium">
              ${medicina.descripcion}
            </p>
            <p>
              <span class="text-custom-main fw-medium">PRECIO:</span> ${medicina.precio}
            </p>
            <p>
              <span class="text-custom-main fw-medium"
                >PRECIO PROMOCIONAL:</span
              >
              ${medicina.precioPromocional}
            </p>
            <p>
              <span class="text-custom-main fw-medium">CONTENIDO NETO:</span>
              ${medicina.contenidoNeto}
            </p>
          </div>
        </div>
    `;

    container.innerHTML += medicinaHTML;
  });
}

export function mostrarCitas() {
  const pacientes = traerPaciente();
  const container = document.getElementById("citasContainer");

  container.innerHTML = "";

  pacientes.forEach((paciente) => {
    const medicinaHTML = `
        <div class="shadow-lg border-custom p-4 general-container">
          <div class="text-medium">
            <h1>CITA MEDICA</h1>
            <p class="text-medium">
              <span class="fw-bold">Nombre de Paciente:</span> ${paciente.nombre}
            </p>
            <p class="text-medium">
              <span class="fw-bold">Referido de:</span> ${paciente.doctor}
            </p>
            <p class="text-medium">
              <span class="fw-bold">Fecha:</span> 20/05/2024
            </p>
            <p class="text-medium"><span class="fw-bold">Hora:</span> 2:00PM</p>
          </div>
          <div class="d-flex justify-content-between text-medium">
            <button class="btn btn-danger">CANCELAR</button>
            <button class="btn btn-success">ACEPTAR</button>
          </div>
        </div>
    `;

    container.innerHTML += medicinaHTML;
  });
}

export function agregarNombre() {
  const doctor = traerDoctor();
  const container = document.getElementById("nombreDoctor");

  container.innerHTML = "";

  const medicinaHTML = `
          <h1 class="text-custom-main text-tile">Hola Dr ${doctor.nombre}!</h1>
          <p class="text-custom-ligth">Buenos Dias</p>
    `;

  container.innerHTML += medicinaHTML;
}

export function agregarDatosPerfil() {
  const doctor = traerDoctor();
  const container = document.getElementById("profileCardContainer");

  container.innerHTML = "";

  const medicinaHTML = `
            <img src="./assets/asistencia-medica 1.png" class="w-25" alt="" />
            <h1 class="fs-2 fw-light">${doctor.dni}</h1>
            <h1 class="fs-2 fw-light">${doctor.especialidad}</h1>
    `;

  container.innerHTML += medicinaHTML;
}
