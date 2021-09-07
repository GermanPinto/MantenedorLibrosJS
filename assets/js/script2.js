
var cabeceraTabla = `
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">Titulo Libro</th>
    <th scope="col">Autor</th>
    <th scope="col">Precio</th>
    </tr>
    </thead>
    `;

var cuerpoTabla = "";

function llenado(e) {

    var nombreLibro = document.getElementById("nombre").value;
    var autorLibro = document.getElementById("autor").value;
    var precio = document.getElementById("precio").value;

    cuerpoTabla = `   
    <tbody>
    <tr>
    <th scope="row">1</th>
    <td>${nombreLibro}</td>
    <td>${autorLibro}</td>
    <td>${precio}</td>
    </tr>
    </tbody>
    </table>`
    document.getElementById('miTabla').innerHTML = cabeceraTabla + cuerpoTabla;
    e.preventDefault();
}

var formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", llenado);




