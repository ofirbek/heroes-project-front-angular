import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlDirective,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  form!: FormGroup;
  isLoginMode!: boolean;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
      checkbox: new FormControl(false, Validators.requiredTrue),
    });
    // if(this.isLoginMode){
    //   this.form.addControl()
    // }
  }

  handleSubmit(): void {
    this.submitted = true;
    this.userService.addUser(this.form.value);
    this.router.navigate(['/login']);
    // if(isUserExists()){
    // this.userService.addUser(this.form.value);
    // this.router .navigate(["/login"]);
    //     }else{
    //     }

    // console.warn();
  }
}
