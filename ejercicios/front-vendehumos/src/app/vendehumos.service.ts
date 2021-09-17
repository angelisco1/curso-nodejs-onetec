import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  constructor(private http: HttpClient) { }

  getAllVendehumos() {
    return this.http.get('http://localhost:3000/vendehumos')
  }

  createVendehumos(datos: any) {
    return this.http.post(
      'http://localhost:3000/vendehumos',
      datos
    )
  }

}
