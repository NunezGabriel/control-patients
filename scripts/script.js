import {
  mostrarPacientes,
  mostrarDoctores,
  mostrarMedicina,
  mostrarCitas,
} from "./data.js";

switch (window.location.href) {
  case "http://127.0.0.1:5500/agregar.html":
    document
      .getElementById("miFormularioPaciente") // Formulario de pacientes
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const dni = document.getElementById("dni").value;
        const doctor = document.getElementById("doctor").value;
        const sintomas = document.getElementById("sintomas").value;
        const diagnostico = document.getElementById("diagnostico").value;

        const nuevoPaciente = {
          nombre: nombre,
          dni: dni,
          doctor: doctor,
          sintomas: sintomas,
          diagnostico: diagnostico,
        };

        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

        pacientes.push(nuevoPaciente);

        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        window.location.href = "./home.html";
      });
    break;
  case "http://127.0.0.1:5500/index.html":
    document
      .getElementById("miFormulario") // Formulario de Usuario
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const especialidad = document.getElementById("especialidad").value;
        const dni = document.getElementById("dni").value;

        const datosFormulario = {
          nombre: nombre,
          especialidad: especialidad,
          dni: dni,
        };

        console.log(datosFormulario);

        localStorage.setItem(
          "datosFormulario",
          JSON.stringify(datosFormulario)
        );

        window.location.href = "./home.html";
      });

    break;
  case "http://127.0.0.1:5500/pacientes.html":
    mostrarPacientes();
    break;
  case "http://127.0.0.1:5500/personal-medico.html":
    mostrarDoctores();
    break;
  case "http://127.0.0.1:5500/farmacologia.html":
    mostrarMedicina();
    break;
  case "http://127.0.0.1:5500/citas.html":
    mostrarCitas();
    break;
  default:
    console.log("no exito");
    break;
}
