export function filtrarConsultas(consultas) {
  let cFiltradas = [];

  consultas.forEach((element) => {
    if (!element.payed) cFiltradas.push(element);
  });

  for (let i = consultas.length - 1; i >= 0; i--) {
    if (cFiltradas.length < 4 && !cFiltradas.includes(consultas[i]))
      cFiltradas.unshift(consultas[i]);
  }
  return cFiltradas;
}
