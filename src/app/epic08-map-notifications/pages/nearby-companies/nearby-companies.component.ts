import { Component, OnInit } from '@angular/core';
import { MapLocation } from '../../model/map-location.model';

@Component({
  selector: 'app-nearby-companies',
  templateUrl: './nearby-companies.component.html',
  styleUrls: ['./nearby-companies.component.css']
})
export class NearbyCompaniesComponent implements OnInit {
  locations: MapLocation[] = [];

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(pos => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;

      // Empresas cercanas simuladas
      this.locations = [
        { id: 1, name: 'TechCorp', latitude: userLat + 0.005, longitude: userLon + 0.002 },
        { id: 2, name: 'InnovateX', latitude: userLat - 0.004, longitude: userLon - 0.003 }
      ];
    });
  }
}
