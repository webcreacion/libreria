export class Libro {
	constructor(titulo, autor, url){
		this.autor = autor;
		this.titulo = titulo;
		this.url = url;
	}
}
export const libros = [];
libros.push(new Libro('El Guardián entre el Centeno', 'J.D. Salinger', 'https://imagessl9.casadellibro.com/a/l/s5/09/9788420674209.webp'));
libros.push(new Libro('Cien años de soledad', 'Gabriel García Márquez', 'https://imagessl1.casadellibro.com/a/l/s5/71/9788439732471.webp'));
libros.push(new Libro('Matar a un ruiseñor', 'Harper Lee', 'https://imagessl8.casadellibro.com/a/l/s7/48/9788417216948.webp'));
libros.push(new Libro('Don Quijote de la Mancha', 'Miguel de Cervantes', 'https://imagessl8.casadellibro.com/a/l/s7/68/9788412222968.webp'));
libros.push(new Libro('En busca del tiempo perdido', 'Marcel Proust', 'https://imagessl6.casadellibro.com/a/l/s7/26/9788420652726.webp'));
libros.push(new Libro('Ulises', 'James Joyce', 'https://imagessl6.casadellibro.com/a/l/s7/46/9788413628646.webp'));
libros.push(new Libro('La Odisea', 'Homero', 'https://imagessl9.casadellibro.com/a/l/s7/19/9788483433119.webp'));
libros.push(new Libro('Crimen y castigo', 'Fiodor Dostoievski', 'https://imagessl8.casadellibro.com/a/l/s7/58/9788420665658.webp'));
libros.push(new Libro('Rebelión en la granja', 'George Orwell', 'https://imagessl2.casadellibro.com/a/l/s7/62/9788423342662.webp'));
libros.push(new Libro('El Gran Gatsby', 'F. Scott Fitzgerald', 'https://imagessl2.casadellibro.com/a/l/s7/32/9788433933232.webp', '9788433933232'));
libros.push(new Libro('El Juego del Ángel', 'Carlos Ruiz Zafón', 'https://imagessl7.casadellibro.com/a/l/s7/77/9788408095477.webp', '9788408095477'));
libros.push(new Libro('El Prisionero del Cielo', 'Carlos Ruiz Zafón', 'https://imagessl3.casadellibro.com/a/l/s7/03/9788408112303.webp', '9788408112303'));
libros.push(new Libro('El Laberinto de los Espíritus', 'Carlos Ruiz Zafón'));
libros.push(new Libro('Marina', 'Carlos Ruiz Zafón'));
libros.push(new Libro('1984', 'George Orwell'));
libros.push(new Libro('Moby Dick', 'Herman Melville'));
libros.push(new Libro('El retrato de Dorian Gray', 'Oscar Wilde'));
libros.push(new Libro('Rayuela', 'Julio Cortázar'));
libros.push(new Libro('Los hermanos Karamazov', 'Fiodor Dostoievski'));
libros.push(new Libro('Don Juan Tenorio', 'Tirso de Molina'));
libros.push(new Libro('La insoportable levedad del ser', 'Milan Kundera'));
libros.push(new Libro('La sombra del viento', 'Carlos Ruiz Zafón', 'https://imagessl2.casadellibro.com/a/l/t5/17/9788408241317.jpg'));
libros.push(new Libro('Mujer en punto cero', 'Nawal El Saadawi'));



// export function buscarLibroPorAutor(autor, libreria) {
//     return libreria.filter(function(libro){ 
//         return libro.autor.toLowerCase() === autor.toLowerCase();
//     });
// }

export function buscarLibroPorAutor(filtro, libreria) {
    return libreria.filter(function(libro){ 
        return libro.autor.toLowerCase().includes(filtro.toLowerCase());
    });
}



