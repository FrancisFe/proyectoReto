const guardarValor = () => {






  valor =  10 ;









  localStorage.setItem("Valor", parseInt(valor));
};
const obtenerFecha = () => {
  let fecha = new Date();
  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let mesAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let parrafoFecha = document.querySelector("#fecha");

  parrafoFecha.innerHTML = `${
    diasSemana[fecha.getDay()]
  } ${fecha.getDate()} de ${
    mesAnio[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  let parrafoHora = document.getElementById("hora");

  const DATE_MAX = new Date("12/31/2023 0:01 AM");
  const AHORA = new Date();
  const MILISEGUNDOS_EN_UN_SEGUNDO = 1000;
  const MILISEGUNDOS_EN_UN_MINUTO = MILISEGUNDOS_EN_UN_SEGUNDO * 60;
  const MILISEGUNDOS_EN_UNA_HORA = MILISEGUNDOS_EN_UN_MINUTO * 60;
  const MILISEGUNDOS_EN_UN_DIA = MILISEGUNDOS_EN_UNA_HORA * 24;
  const DURACION = DATE_MAX - AHORA;
  const diasRestantes = Math.floor(DURACION / MILISEGUNDOS_EN_UN_DIA);
  let horasRestantes = Math.floor(
    (DURACION % MILISEGUNDOS_EN_UN_DIA) / MILISEGUNDOS_EN_UNA_HORA
  );
  if (horasRestantes < 10) {
    horasRestantes = "0" + horasRestantes;
  }
  let minutosRestantes = Math.floor(
    (DURACION % MILISEGUNDOS_EN_UNA_HORA) / MILISEGUNDOS_EN_UN_MINUTO
  );
  if (minutosRestantes < 10) {
    minutosRestantes = "0" + minutosRestantes;
  }
  let segundosRestantes = Math.floor(
    (DURACION % MILISEGUNDOS_EN_UN_MINUTO) / MILISEGUNDOS_EN_UN_SEGUNDO
  );
  if (segundosRestantes < 10) {
    segundosRestantes = "0" + segundosRestantes;
  }
  parrafoHora.innerHTML = `${diasRestantes}:${horasRestantes}:${minutosRestantes}:${segundosRestantes}`;
};
const cambiarColor = (color) => {
  let contenedor = document.getElementById("contenedorPrincipal");
  contenedor.className = color;
};
const total = 35000;
const cambiarMontoRecaudado = () => {
  let montoRecaudado = document.getElementById("montoRecaudado");
  let valor = localStorage.getItem("Valor");
  montoRecaudado.innerHTML = `Monto Recaudado: ${valor}€`;

  let barra = document.getElementById("barra");
  let barraValor = (valor * 100) / 35000;
  barra.style.width = `${barraValor}%`;
};

setInterval(obtenerFecha, 1000);
guardarValor();
cambiarMontoRecaudado();
