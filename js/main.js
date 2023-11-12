const tabla = document.getElementById('tabla');
let libros = [];

//Importamos el objeto JSON
fetch('./js/libros.json')
	.then(response => response.json())
	.then(data=> {
		libros = data;
		renderizarTabla(libros);		
	})
	.catch(error => {
		  console.error('Error al cargar y analizar el archivo JSON:', error);
});


//Renderiza la tabla
function renderizarTabla(libros){
	tabla.innerHTML = `
			<theader>
				<tr>
					<th>Título</th>
					<th>Autor</th>
					<th>Sinopsis</th>
					<th>Portada</th>
				</th>
			</theader>
			<tbody>
		`
		libros.forEach((element, index)=>{
			tabla.insertAdjacentHTML('beforeend', 
				`
					<tr>
						<td>${element.titulo}</td>
						<td>${element.autor}</td>
						<td>${element.sinopsis}</td>
						<td><img src=${element.portada} alt="portada del libro ${element.titulo}" height="100"></td>
					</th>
					
				`
			)
		});
		tabla.insertAdjacentHTML('beforeend', '</tbody>');
}



