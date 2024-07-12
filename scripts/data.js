let doctores = [
  {
    nombre: "Dra Rosa Quispe",
    dni: "73685241",
    especialidad: "Cardiologia",
  },
  {
    nombre: "Dr. Josue Urquizo",
    dni: "19472063",
    especialidad: "Medicina Interna",
  },
  {
    nombre: "Dra. Emily Lopez",
    dni: "85930167",
    especialidad: "Pediatria",
  },
  {
    nombre: "Dr. Michael Ramos",
    dni: "42618905",
    especialidad: "Oncologia",
  },
  {
    nombre: "Dra. Susan Perez",
    dni: "94725183",
    especialidad: "Oftalmologia",
  },
  {
    nombre: "Dr. Peter Gonzales",
    dni: "60374829",
    especialidad: "Psiquiatria",
  },
];

const hospitales = [
  "Princeton-Plainsbor",
  "Barnes-Jewish",
  "Mount Sinai",
  "Houston Methodist Hospital",
];

export function obtenerHospital(hospitales) {
  return hospitales[Math.floor(Math.random() * hospitales.length)];
}

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
            <p><span class="text-custom-main fw-medium">DNI:</span> ${doctor.dni}</p>
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

  pacientes.forEach((paciente, index) => {
    let hospital = obtenerHospital(hospitales);
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
              <span class="fw-bold">Sintomas:</span> ${paciente.sintomas}
            </p>
            <p class="text-medium"><span class="fw-bold">Hospital:</span> ${hospital}</p>
          </div>
          <div class="d-flex justify-content-between text-medium">
            <button data-id="${paciente.dni}" class="btn btn-danger btnCancelar" data-index="${index}">CANCELAR</button>
            <button data-paciente="${paciente}" data-id="${paciente.dni}" class="btn btn-success btnAceptar" data-index="${index}">ACEPTAR</button>
          </div>
        </div>
    `;

    container.innerHTML += medicinaHTML;
  });

  agregarContadorLS();
}

export function agregarContadorLS() {
  let citasCanceladas = parseInt(localStorage.getItem("citasCanceladas")) || 0;
  let citasAceptadas = parseInt(localStorage.getItem("citasAceptadas")) || 0;
  const btnCancelar = document.querySelectorAll(".btnCancelar");
  const btnAceptar = document.querySelectorAll(".btnAceptar");

  function updateCounter(type, dni) {
    if (type === "canceladas") {
      citasCanceladas++;
      localStorage.setItem("citasCanceladas", citasCanceladas);
      console.log("Citas canceladas:", citasCanceladas);
    } else if (type === "aceptadas") {
      citasAceptadas++;
      localStorage.setItem("citasAceptadas", citasAceptadas);
      console.log("Citas aceptadas:", citasAceptadas);
    }
  }

  function agregarFactura() {
    let nroFactura = Math.floor(
      Math.random() * (999999999 - 100000000 + 1) + 100000000
    );
    let hospital = obtenerHospital(hospitales);
    let doctor = traerDoctor();
    let fecha = new Date();
    let nuevaFactura = {
      nroFactura: nroFactura,
      fecha: fecha,
      hospital: hospital,
      doctor: doctor.nombre,
      cita: doctor.especialidad,
    };

    let facturas = JSON.parse(localStorage.getItem("facturas")) || [];

    facturas.push(nuevaFactura);

    localStorage.setItem("facturas", JSON.stringify(facturas));
  }

  btnCancelar.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateCounter("canceladas");
      let dni = btn.getAttribute("data-id");
      let pacientes = traerPaciente();
      pacientes = pacientes.filter((paciente) => paciente.dni !== dni); // Borra el Paciente
      localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Borra el Paciente
      console.log(pacientes);
      location.reload();
    });
  });

  btnAceptar.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateCounter("aceptadas");
      let dni = btn.getAttribute("data-id");
      let pacientes = traerPaciente();
      pacientes = pacientes.filter((paciente) => paciente.dni !== dni); // Borra el Paciente
      localStorage.setItem("pacientes", JSON.stringify(pacientes)); // Borra el Paciente
      agregarFactura();
      location.reload(); // Recarga la pag
    });
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

export function agregarDoctor() {
  const doctor = traerDoctor();
  doctores.unshift(doctor);
}

export function traerContadorCitasAceptadas() {
  let citasContA;
  if (localStorage.getItem("citasAceptadas")) {
    citasContA = JSON.parse(localStorage.getItem("citasAceptadas"));
  }
  return citasContA;
}

export function traerContadorCitasCanceladas() {
  let citasContC;
  if (localStorage.getItem("citasCanceladas")) {
    citasContC = JSON.parse(localStorage.getItem("citasCanceladas"));
  }
  return citasContC;
}

export function mostrarDesenpeno() {
  let citasA = traerContadorCitasAceptadas();
  let citasC = traerContadorCitasCanceladas();
  const container = document.getElementById("desempenoContainer");

  container.innerHTML = "";

  const medicinaHTML = `
        <div class="text-center text-custom-main">
          <p class="text-tile">Indicador de Desempeño</p>
        </div>
        <div
          class="d-flex justify-content-center align-items-center gap-3 mb-4"
        >
          <img
            class="w-25 h-25"
            src="./assets/grafico-de-torta.png"
            alt="Gráfico Circular"
          />
          <div class="d-flex flex-column justify-content-center">
            <div><span class="citas-realizadas"></span>Citas Realizadas</div>
            <div><span class="citas-canceladas"></span>Citas Canceladas</div>
          </div>
        </div>
        <div class="d-flex justify-content-around align-items-center">
          <div class="text-center">
            <img class="w-50 h-50" src="./assets/cheque.png" alt="Icono" />
            <div>
              <strong class="text-custom-main">Citas Realizadas: </strong>${citasA}
            </div>
          </div>
          <div class="text-center">
            <img class="w-50 h-50" src="./assets/cancelar.png" alt="Icono" />
            <div>
              <strong class="text-custom-main">Citas canceladas: </strong>${citasC}
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <p class="">
            Usted Tuvo un <strong class="text-success">Buen Desempeño</strong>
          </p>
        </div>
    `;

  container.innerHTML += medicinaHTML;
}

export function traerFacturas() {
  let facturas = [];

  if (localStorage.getItem("facturas")) {
    facturas = JSON.parse(localStorage.getItem("facturas"));
  }
  return facturas;
}

export function mostrarFacturas() {
  const facturas = traerFacturas();
  console.log(facturas);
  const container = document.getElementById("facturasContainer");

  container.innerHTML = "";

  facturas.forEach((factura) => {
    const pacienteHTML = `
        <div class="shadow-lg border-custom p-4 general-container">
          <div class="text-medium">
            <h1>Factura hospitalaria</h1>
            <p>Núm. de factura: ${factura.nroFactura}</p>
            <p>Fecha de la factura: ${factura.fecha}</p>
          </div>
          <div class="d-flex justify-content-between text-medium">
            <div class="">
              <p><strong>De Hospital:</strong></p>
              <p>${factura.hospital}</p>
            </div>
            <div class="">
              <p><strong>Facturar a:</strong></p>
              <p>${factura.doctor}</p>
            </div>
          </div>

          <div class="grid-eigth d-grid text-medium fw-medium text-center">
            <div class="bg-custom-main text-white">descripción</div>
            <div class="bg-custom-main text-white">tarifa</div>
            <div class="bg-custom-main text-white">impuesto</div>
            <div class="bg-custom-main text-white">importe</div>

            <div class="bg-custom-secondary">cita ${factura.cita}</div>
            <div class="bg-custom-secondary">9,991.00</div>
            <div class="bg-custom-secondary">0.4%</div>
            <div class="bg-custom-secondary">9,982,008</div>
          </div>
        </div>
    `;

    container.innerHTML += pacienteHTML;
  });
}
