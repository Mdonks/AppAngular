import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juegos = [
    { nombre: 'Mario Bros', descripcion: 'Clásico juego de plataformas' },
    { nombre: 'The Legend of Zelda', descripcion: 'Épica aventura de fantasía' },
    { nombre: 'Pac-Man', descripcion: 'Come puntos y evita a los fantasmas' }
  ];

  verDetalles(juego: any) {
    // Aquí podrías navegar a la página de detalles del juego seleccionado
    console.log('Detalles de:', juego.nombre);
  }
}
