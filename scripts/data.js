export function loadPacientes() {
  let pacientes = [];

  if (localStorage.getItem("pacientes")) {
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
  }
  console.log(pacientes);
}
