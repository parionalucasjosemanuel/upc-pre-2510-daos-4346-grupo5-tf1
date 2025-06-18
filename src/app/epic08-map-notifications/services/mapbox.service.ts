import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MapboxService {
  private accessToken = 'pk.eyJ1IjoibWFwdXNlcmRldiIsImEiOiJjbGZ4Y2p5ZWMwMDUzM3Ztdmc5NjI3aGl3In0.xS-GAg4msK8Xs4ZVrKhPVg';

  constructor(private http: HttpClient) {}

  reverseGeocode(lat: number, lon: number): Observable<string> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(map(res => res.features[0]?.place_name || 'Unknown location'));
  }
}
