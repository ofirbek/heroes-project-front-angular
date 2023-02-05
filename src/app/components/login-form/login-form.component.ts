import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
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
    const userName: string = this.loginForm.get('userName')?.value;
    const password: string = this.loginForm.get('password')?.value;
    // this.authService.isLoggedIn.subscribe()
    this.authService.login({ username: userName, password }).subscribe({
      next: (res) => {
        this.router.navigate(['/user-main/heroes']);
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/user-main']);
      },
    });
    //   this.userNameTaken = true;
  }
}
