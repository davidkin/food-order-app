import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
    constructor(
        private http: HttpClient,
    ) {}

    getCustomList(): Observable<any> {
        return this.http.get('https://swapi.co/api/people/');
    }
}
