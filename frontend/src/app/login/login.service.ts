import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginService {
    public url;
    constructor(private http: HttpClient
    ) {
        if (window.location.hostname === 'localhost') {
            this.url = 'http://localhost:4100/login';
        } else {
            this.url = '/login';
        }
    }

    public login(member: any): any {
        return this.http
            .post(this.url, member, { headers: { 'Content-Type': 'application/json' } });
    }

}
