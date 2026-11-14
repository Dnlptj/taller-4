import { Component, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css',
  animations: [
    trigger('crecer', [
      state('chico', style({ transform: 'scale(1)', color: '#333' })),
      state('grande', style({ transform: 'scale(1.6)', color: '#1a73e8' })),
      transition('chico <=> grande', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class Contador {
  total = signal(0);

  get estado() {
    return this.total() > 0 ? 'grande' : 'chico';
  }

  sumar() {
    this.total.update((n) => n + 1);
  }

  reiniciar() {
    this.total.set(0);
  }
}
