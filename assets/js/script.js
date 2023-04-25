const agregarGastos = () => {

    let cantidadGasto = parseInt(document.querySelector("#cantidadGasto").value)
    let nombreGasto = document.querySelector("#nombreGasto").value
    let storageActual = JSON.parse(localStorage.getItem("gastos"))


    console.log(storageActual.length)
    let nuevoStorage = []
    storageActual.push({ cantidadGasto, nombreGasto })
    localStorage.setItem("gastos", JSON.stringify(storageActual));

    llenarTabla()

}


const guardarPresupuesto = () => {
    let presupuesto = parseInt(document.querySelector("#presupuestoInicial").value);
    if (presupuesto < 1) {
        mostrarError("msj_error_presupuesto", "CANTIDAD INCORRECTA")
        return;

    }
    localStorage.setItem("gastos", JSON.stringify([]));

    localStorage.setItem("presupuesto", presupuesto);

    actualizarVista();
}
const actualizarVista = () => {

    let presupuesto = localStorage.getItem("presupuesto");
    console.log(presupuesto)
    let divPresupuesto = document.querySelector("#divPresupuesto");
    let divGastos = document.querySelector("#divGastos");
    let divControlGastos = document.querySelector("#divControlGastos");


}


function llenarTabla() {
    let cuerpoTabla = document.querySelector(
        "#tablaGastos"
    );
    cuerpoTabla.style.display = "block";
        console.log(cuerpoTabla) 

    let acumulador = "";
    const gastosGuardados = JSON.parse(localStorage.getItem("gastos"))

    console.log(gastosGuardados.length)

    gastosGuardados.forEach(function (usuario, index) {
        acumulador += `
            <tr>
                <th scope="row">${1}</th>
                <td>dfdfdfdffd/td>
               
            </tr> 
        `;
    });

    cuerpoTabla.innerHTML = acumulador;
}


