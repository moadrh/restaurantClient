import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Cuisinier } from '../../shared/Cuisinier';

@Injectable({
  providedIn: 'root'
})
export class CuisinierService {

  constructor(private http: HttpClient) { }

  getCuisiniers(): Observable<any> {
    return this.http.get(API_URLS.CUISINIER_URL);
  }

  getCuisinierById(id: number): Observable<any> {
    return this.http.get(API_URLS.CUISINIER_URL + `/${id}`);
  }

  addCuisinier(cuisinier: Cuisinier): Observable<any> {
    return this.http.post(API_URLS.CUISINIER_URL, cuisinier);
  }

  updateCuisinier(cuisinier: Cuisinier): Observable<any> {
    return this.http.put(API_URLS.CUISINIER_URL, cuisinier);
  }

  deleteCuisinier(id: number): Observable<any> {
    console.log("iciiiii " + id);
    return this.http.delete(API_URLS.CUISINIER_URL + `/${id}`);
  }
}
