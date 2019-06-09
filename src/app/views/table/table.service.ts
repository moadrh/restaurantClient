import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api.url.config';
import { Table } from '../../shared/Table';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    constructor(private http: HttpClient) { }

    getTables(): Observable<any> {
        return this.http.get(API_URLS.TABLE_URL);
    }

    getTableById(id: number): Observable<any> {
        return this.http.get(API_URLS.TABLE_URL + `/${id}`);
    }

    addTable(table: Table): Observable<any> {
        return this.http.post(API_URLS.TABLE_URL, table);
    }

    updateTable(table: Table): Observable<any> {
        return this.http.put(API_URLS.TABLE_URL, table);
    }

    deleteTable(id: number): Observable<any> {
        console.log("iciiiii " + id);
        return this.http.delete(API_URLS.TABLE_URL + `/${id}`);
    }
}
