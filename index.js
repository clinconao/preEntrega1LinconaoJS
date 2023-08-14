let answer = prompt ("¿Quieres calcular tu retención de boletas de honorarios? si/no (en minúsculas)")
while (answer === "si") {
    const nombre = prompt ("Ingresa tu Nombre")
    const montoInicial = prompt ("Ingresa el monto a cobrar")
    const tasaRetencion = prompt ("Ingresa tu tasa de retención (solo numeros enteros)")
    const calculoaRetener = montoInicial / 100 * tasaRetencion
    const bolsillo = montoInicial - calculoaRetener
    alert("Hola " + nombre + " tu retención es de $" + calculoaRetener + " y la plata que queda en tu bolsillo es de $" + bolsillo)
    answer = prompt ("¿Quieres calcular otra boleta?")
}
alert("Agradecido por tu visita, ahora verás la tabla de retención por año")
