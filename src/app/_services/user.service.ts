import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/get-users');
    }

    register(user: User) {
        return this.http.post('/api/add-user', user);
    }

    delete(id) {
        return this.http.delete('/api/delete-user/' + id);
    }
}