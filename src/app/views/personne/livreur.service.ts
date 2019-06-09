import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Livreur } from '../../shared/Livreur';

@Injectable({
    providedIn: 'root'
})
export class LivreurService {

    constructor(private http: HttpClient) { }

    getLivreurs(): Observable<any> {
        return this.http.get(API_URLS.LIVREUR_URL);
    }

    getLivreurById(id: number): Observable<any> {
        return this.http.get(API_URLS.LIVREUR_URL + `/${id}`);
    }

    addLivreur(livreur: Livreur): Observable<any> {
        return this.http.post(API_URLS.LIVREUR_URL, livreur);
    }

    updateLivreur(livreur: Livreur): Observable<any> {
        return this.http.put(API_URLS.LIVREUR_URL, livreur);
    }

    deleteLivreur(id: number): Observable<any> {
        return this.http.delete(API_URLS.LIVREUR_URL + `/${id}`);
    }
}
