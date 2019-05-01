import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public errorMessage = '';
  user: User;
  constructor(
    private titleService: Title,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('This is login page');
    const user = sessionStorage.getItem('user');
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(user);
      this.loginSuccessful(JSON.parse(user));
      this.router.navigate(['/dashboard']);
    }
  }

  private login() {
    this.loginService.login({
      email: this.email,
      password: this.password
    })
      .subscribe(
        res => {
          if (res) {
            this.user = res;
            this.loginSuccessful(res);
          } else {
            this.errorMessage = 'Please check your email or password';
          }
        }
      );
  }

  private loginSuccessful(user) {
    this.setUserDetails(user);
    this.router.navigate(['/dashboard']);
  }

  private setUserDetails(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public signup() {
    this.router.navigate(['/signup']);
  }
}
