import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Serveur } from '../../shared/Serveur';

@Injectable({
  providedIn: 'root'
})
export class ServeurService {

  constructor(private http :HttpClient) { }

  getServeurs(): Observable<any>{
    return this.http.get(API_URLS.SERVEUR_URL);
}

getServeurById(id:number): Observable<any>{
  return this.http.get(API_URLS.SERVEUR_URL+`/${id}`);
}

addServeur(serveur:Serveur): Observable<any>{
  return this.http.post(API_URLS.SERVEUR_URL, serveur);
}

updateServeur(serveur:Serveur): Observable<any>{
  return this.http.put(API_URLS.SERVEUR_URL, serveur);
}

deleteServeur(id:number): Observable<any>{
  console.log("iciiiii "+ id);
  return this.http.delete(API_URLS.SERVEUR_URL +`/${id}`);
}
}
