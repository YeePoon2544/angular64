import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
url = "http://localhost/angular64API/status.php"
  constructor(private HttpClient: HttpClient) { }


  public getStatus(): Observable<any>{
    return this.HttpClient.get(this.url);
  }
}
