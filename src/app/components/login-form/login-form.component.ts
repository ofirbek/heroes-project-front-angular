import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  userNameTaken: boolean = false;

  isLoggedSub!: Subscription;
  isUserLogged!: boolean;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedSub = this.authService.isUserLogged.subscribe({
      next: (isLogged: boolean) => {
        this.isUserLogged = isLogged;
      },
    });
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
    });
  }

  onSubmit() {
    // this.router.navigate(['heros']);
  }
  handleSubmit(): void {
    this.submitted = true;
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    const user = this.usersService.isUserExists(userName, password);
    if (user != null) {
      // this.authService.isLoggedIn.subscribe()
      this.authService.login(user);
      this.router.navigate(['/user-main/heroes']);
    } else {
      this.userNameTaken = true;
    }

    // this.router.navigate(["/user-main"]);
  }

  // handleSubmitV1(loginForm: NgForm) {
  //   console.log(loginForm);
  // }
}
