import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  isUserLoggedSub: Subscription = new Subscription();
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isUserLogged = !!this.authService.myUser;
    this.isUserLoggedSub = this.authService.isUserLogged.subscribe(
      (isUserLogged) => {
        this.isUserLogged = isUserLogged;
      }
    );
  }
  ngOnDestroy() {
    this.isUserLoggedSub.unsubscribe();
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
