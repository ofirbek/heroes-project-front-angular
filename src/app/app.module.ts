import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { GameInstructionsComponent } from './components/game-instructions/game-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    HeroesComponent,
    PageNotFoundComponent,
    RegisterFormComponent,
    GameInstructionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
