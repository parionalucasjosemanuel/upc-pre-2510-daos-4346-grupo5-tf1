import { Component, Input, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapLocation } from '../../model/map-location.model';

@Component({
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  styleUrls: ['./mapbox-map.component.css']
})
export class MapboxMapComponent implements OnInit {
  @Input() locations: MapLocation[] = [];

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoibWFwdXNlcmRldiIsImEiOiJjbGZ4Y2p5ZWMwMDUzM3Ztdmc5NjI3aGl3In0.xS-GAg4msK8Xs4ZVrKhPVg',
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.0428, -12.0464], // Lima, Perú
      zoom: 12
    });

    this.locations.forEach(loc => {
      new mapboxgl.Marker()
        .setLngLat([loc.longitude, loc.latitude])
        .setPopup(new mapboxgl.Popup().setText(loc.name))
        .addTo(map);
    });
  }
}

