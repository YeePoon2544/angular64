import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost/angular64API/user.php';

  constructor(private httpCilent: HttpClient) { }
  //สร้างเมธอดสำหรับ CRUD Operation
  public getUser():Observable <any>{
    return this.httpCilent.get(this.url);
  }
  //สร้างเมธอดสำหรับ post ข้อมูล
  public postUser(model:any): Observable<any>{
    console.log(model);
    return this.httpCilent.post(this.url, model);
  }
  //สร้างเมธอดสำหรับลบข้อมูล
  public deleteUser(userid: string): Observable<any> {
    console.log(userid);
return this.httpCilent.delete(this.url + '?userid=' + userid);
  }
  //สร้างเมธอดเพื่อเเก้ไขข้อมูล
  public putUser (model:any): Observable<any>{
    return this.httpCilent.put(this.url,model);
  }
}

