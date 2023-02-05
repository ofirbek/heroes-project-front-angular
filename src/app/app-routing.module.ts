import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './modules/main/main.module';
import { ErrorModule } from './modules/error/error.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainModuleComponent } from './modules/main/components/main-module/main-module.component';

const routes: Routes = [
  // { path: '', loadChildren: () => MainModule },
  { path: '', component: MainModuleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
