// src/assets/js/usuario.js
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Simple DataTables en la tabla con ID #example
  const dataTable = new simpleDatatables.DataTable("#example", {
    searchable: true,
    fixedHeight: true,
    perPage: 5,
  });
});
