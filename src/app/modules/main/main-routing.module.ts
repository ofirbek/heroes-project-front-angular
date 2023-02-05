import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { HeaderComponent } from 'src/app/modules/main/components/header/header.component';
import { FooterComponent } from 'src/app/modules/main/components/footer/footer.component';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { GameInstructionsComponent } from 'src/app/components/game-instructions/game-instructions.component';

import { HeroesGuard } from 'src/app/guards/heroes.guard';
// import { UserMainComponent } from '';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'home', component: HomePageComponent },
  // { path: 'home', component: HomePageComponent, canActivate: [HeroesGuard] },

  // {
  //   path: 'user-main',
  //   component: UserMainComponent,
  //   canActivateChild: [HeroesGuard],
  //   children: [
  //     { path: 'my-heroes', component: MyHeroesComponent },
  //     { path: 'heroes', component: HeroesListComponent },
  //   ],
  // },
  { path: 'game-Instructions', component: GameInstructionsComponent },
  // לסדר שכשיש בעיה נגיע למודול 404 במקום כל האפליקציה
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    HomePageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    // HeaderComponent,
    // FooterComponent,
    HeroesComponent,
    GameInstructionsComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
