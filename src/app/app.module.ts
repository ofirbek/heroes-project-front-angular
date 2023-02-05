import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './modules/main/main.module';
import { MainModuleComponent } from './modules/main/components/main-module/main-module.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
