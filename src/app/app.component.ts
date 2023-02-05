import { Component } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { MainModule } from './modules/main/main.module';
// import { ErrorModule } from './modules/error/error.module';

// const routes: Routes = [
//   { path: '', loadChildren: () => MainModule },
//   { path: '**', loadChildren: () => ErrorModule },
// ];
@Component({
  selector: 'app-root',
  // template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'heroes-project-front';
}

// export const routing = RouterModule.forRoot(routes);
