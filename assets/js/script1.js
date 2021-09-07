
var nombreLibro= prompt('Ingrese el nombre del libro');
var autorLibro= prompt('Ingrese autor del libro');
var precio= prompt('Ingrese el valor del libro');


document.write(`
<section class="container">
<br><br><br><br><br>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titulo Libro</th>
        <th scope="col">Autor</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${nombreLibro}</td>
        <td>${autorLibro}</td>
        <td>${precio}</td>
      </tr>
    </tbody>
  </table>
  <br><br><br><br><br>
  <br><br><br><br><br>
  <br><br><br><br><br>
</section>

`);
