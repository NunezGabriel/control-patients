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
