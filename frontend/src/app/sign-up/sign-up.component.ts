import { Component, OnInit } from '@angular/core';
import { SignupService } from './sign-up.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private signUpService: SignupService,
    private router: Router,
    private titleService: Title
  ) {
  }
  public username = '';
  public email = '';
  public password = '';
  public userType = 'admin';
  public errorMessage = '';
  public regView: boolean[] = [true, false, false, false];

  ngOnInit() {
    this.titleService.setTitle('Sign Up')
  }

  register() {
    if (!this.checkName()) return;
    this.signUpService.register({
      email: this.email,
      username: this.username,
      password: this.password,
      usertype: this.userType
    })
      .subscribe(
        result => {
          if (result) {
            this.errorMessage = 'Thanks your for sign up ';
            this.regView = [false, true, false, false];
          } else {
            this.errorMessage = 'User already exists';
          }
        }
      );
  }



  private checkName() {
    if (this.username.length < 3 || this.username.length > 20) {
      this.errorMessage = 'Names should be greater than 3 and less than 20 words'
      return false;
    }
    if (this.password.length < 6 || this.password.length > 20) {
      this.errorMessage = 'Password should be greater than 6 and less than 20 words'
      return false;
    }
    if (!/^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/.test(this.email)) {
      this.errorMessage = 'Invalid email'
      return false;
    }
    return true;
  }

  change(event) {
    this.errorMessage = '';
  }

  public login() {
    this.router.navigate(['/login']);
  }

}
