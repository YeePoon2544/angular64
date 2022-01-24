import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
declare const $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  login(): void {
    // ปิด loginModal
    $('#loginModal').modal('hide');
    // เรียกใช้งาน LoginService
    //this.loginService.getLonig(this.username, this.password)
      this.loginService.postLogin(this.username,this.password)
    .subscribe((result) => {
        alert(result.status);
        if (result.status === 'ผู้ดูแลระบบ') {
          this.router.navigate(['/admin']);
        } else if (result.status === 'ผู้ใช้ระบบ') {
          this.router.navigate(['/user']);
        } else {
          alert(result.status);
        }
      });
  }
}
