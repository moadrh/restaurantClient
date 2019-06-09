import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Administrateur } from '../../shared/Administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  constructor(private http :HttpClient) { }

  getAdministrateurs(): Observable<any>{
    return this.http.get(API_URLS.ADMINISTRATEUR_URL);
}

getAdministrateurById(id:number): Observable<any>{
  return this.http.get(API_URLS.ADMINISTRATEUR_URL+`/${id}`);
}

addAdministrateur(administrateur:Administrateur): Observable<any>{
  return this.http.post(API_URLS.ADMINISTRATEUR_URL, administrateur);
}

updateAdministrateur(administrateur:Administrateur): Observable<any>{
  return this.http.put(API_URLS.ADMINISTRATEUR_URL, administrateur);
}

deleteAdministrateur(id:number): Observable<any>{
  console.log("iciiiii "+ id);
  return this.http.delete(API_URLS.ADMINISTRATEUR_URL +`/${id}`);
}
}
