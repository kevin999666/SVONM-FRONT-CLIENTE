import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  url = 'https://redesigned-fiesta-pq9p9xrv5xgh65vr-4000.app.github.dev/api/citas/';   //http://localhost:4000/api/citas/

  constructor(private http: HttpClient) { }

  guardarCita(cita: Cita): Observable<any>{
    return this.http.post(this.url, cita);
  }
}
