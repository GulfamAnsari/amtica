import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/user';

@Injectable()
export class SignupService {
    public url = '';
    constructor(private http: HttpClient, ) {
        if (window.location.hostname === 'localhost') {
            this.url = 'http://localhost:4100/signup';
        } else {
            this.url = '/signup';
        }
    }

    register(member: any): Observable<any> {
        return this.http.post(this.url, member, { headers: { 'Content-Type': 'application/json' } });
    }

}
