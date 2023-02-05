import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/modules/main/components/header/header.component';
import { FooterComponent } from 'src/app/modules/main/components/footer/footer.component';
import { GameInstructionsComponent } from 'src/app/components/game-instructions/game-instructions.component';
import { MainModuleComponent } from './components/main-module/main-module.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainModuleComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule jas already been imported into AppModule');
    }
  }
}
