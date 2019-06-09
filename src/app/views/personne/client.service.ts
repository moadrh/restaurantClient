import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Client } from '../../shared/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http :HttpClient) { }

  getClients(): Observable<any>{
    return this.http.get(API_URLS.CLIENT_URL);
}

getClientById(id:number): Observable<any>{
  return this.http.get(API_URLS.CLIENT_URL+`/${id}`);
}

addClient(client:Client): Observable<any>{
  return this.http.post(API_URLS.CLIENT_URL, client);
}

updateClient(client:Client): Observable<any>{
  return this.http.put(API_URLS.CLIENT_URL, client);
}

deleteClient(id:number): Observable<any>{
  return this.http.delete(API_URLS.CLIENT_URL +`/${id}`);
}
}
