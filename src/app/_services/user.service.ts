import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '@environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
//${config.apiUrl}
    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`/users/${id}`);
    }
}