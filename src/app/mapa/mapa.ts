import { Component, OnInit, viewChild } from '@angular/core';
import { MapComponent, MarkerComponent, PopupComponent } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [MapComponent, MarkerComponent, PopupComponent],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css',
})
export class Mapa implements OnInit {
  token =
    'pk.eyJ1IjoiZG5scHRqIiwiYSI6ImNtd2ZqMXVlaDA4bTgzMHEyZm1kYmo2MWcifQ.a4OuyIUdSo_2A6cOSzQZDg';
  centro: [number, number] = [-76.532, 3.4516];
  marcador: [number, number] | null = null;
  mensaje: string = '';

  ngOnInit() {
    const guardado = localStorage.getItem('ultimoClic');
    if (guardado) {
      const [lng, lat] = JSON.parse(guardado);
      this.mensaje = `Clic en: (${lng}, ${lat})`;
    }
  }

  onMapClick(e: any) {
    const lng = e.lngLat.lng.toFixed(4);
    const lat = e.lngLat.lat.toFixed(4);
    this.marcador = [e.lngLat.lng, e.lngLat.lat];
    this.mensaje = `Clic en: (${lng}, ${lat})`;
    localStorage.setItem('ultimoClic', JSON.stringify([lng, lat]));
  }
}
