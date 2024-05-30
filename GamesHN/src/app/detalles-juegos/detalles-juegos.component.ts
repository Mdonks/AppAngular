import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-juego',
  templateUrl: './detalles-juego.component.html',
  styleUrls: ['./detalles-juego.component.css']
})
export class DetallesJuegoComponent {
  @Input() juego: any;
}
