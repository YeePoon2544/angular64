import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost/angular64API/login.php';
  constructor(private httpClient : HttpClient) { }

  // สร้าง method post get login
public getLonig(username: string, password: string): Observable<any> {
  return this.httpClient.get(this.url + '?username=' + username + '&password=' + password);
}

// สร้าง method post สำหรับ login
public postLogin(username: string , password: string): Observable<any> {
  return this.httpClient.post(this.url,{username , password});
}
}