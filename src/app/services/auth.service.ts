import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/';
 
  constructor(private http: HttpClient) {}
 
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + 'api/login', { username, password });
  }

  register(username: string, password: string, role: string, email: string) {
    console.log(role);
    return this.http.post(this.apiUrl + '/api/register', { username, password, role, email });
  }
}
